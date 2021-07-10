import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as dotenv from "dotenv"
import * as nodemailer from "nodemailer"
import axios from "axios"
import { firestore } from "firebase-admin";


dotenv.config({
  path: "./production.env"
})

interface dataObject {
  id: number;
  name: string;
  symbol: string;
  quote: {
      USD: {
          price: number;
          percent_change_24h: number;
      };
  };
  }
interface cryptoApiInterface {
  status: {
      timestamp: string;
  };
  data: {
    [key: string] : dataObject
  }
}

interface mailData {
  author: string,
  email: string,
  message: string
}

admin.initializeApp();

const db = admin.firestore();

const indexes = [1,1027,825,1839,2010,74,52,3408,6636,4687,7083,1831,2,5426,1975,3890,3717,512,1321,2416,8916,4943,3077,2280,1958,1765,328,5994,7278,3635,3602,4030,1518,4195,4023,4256,1376,2011,7186,6945,4172,3794,3957,1720,7129,3822,5805,2502,1168,4642,3718,5692,5034,1274,6719,2563,6892,2700,1437,4066,4157,131,2394,5864,873,5665,2634,2682,4847,2469,6758,2130,5567,8335,6535,1697,3330,1966,3155,2083,2586,2694,1727,2135,1684,1698,109,3945,1567,6538,1042,3897,2566,2499,1896,4779,2087,1808,3513,5617]

const apiUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1,1027,825,1839,2010,74,52,3408,6636,4687,7083,1831,2,5426,1975,3890,3717,512,1321,2416,8916,4943,3077,2280,1958,1765,328,5994,7278,3635,3602,4030,1518,4195,4023,4256,1376,2011,7186,6945,4172,3794,3957,1720,7129,3822,5805,2502,1168,4642,3718,5692,5034,1274,6719,2563,6892,2700,1437,4066,4157,131,2394,5864,873,5665,2634,2682,4847,2469,6758,2130,5567,8335,6535,1697,3330,1966,3155,2083,2586,2694,1727,2135,1684,1698,109,3945,1567,6538,1042,3897,2566,2499,1896,4779,2087,1808,3513,5617";

const axiosConfig = {
  headers: {
    "X-CMC_PRO_API_KEY": functions.config().crypto_api.key
  }
};

export const updateCryptos = functions.pubsub.schedule("*/5 * * * *").onRun(async () => {
  try {
    const res = await axios.get(apiUrl, axiosConfig);
    const data = res.data as cryptoApiInterface;
    const newListArray: dataObject[] = []
    for (let i = 0; i  < 100; i++) {
      newListArray.push(data.data[indexes[i]])
    }
    const newList  = newListArray.map(el => ({
      id: el.id,
      name: el.name,
      symbol: el.symbol,
      prices: {
          price: el.quote.USD.price,
          change: el.quote.USD.percent_change_24h,
      }
    }));
    const list = {
      status: {
          lastUpdated: firestore.FieldValue.serverTimestamp()
      },
      data: newList
    };
    const result = await db.collection("api").doc("crypto").set(list);
    console.log("Precios de CRYPTOS actualizadas, tiempo: ", result.writeTime.toDate());
  } catch (err) {
    console.log("Error:" ,err);
  }
})

interface entryInterface {
  symbol: string;
  price: number;
  change: number;
}

interface currencieDocumentProps {
  status: {
      lastUpdated: firestore.FieldValue;
  };
  data: entryInterface[];
}

export const updateCurrencies = functions.pubsub.schedule("0 0 * * *").onRun(async () => {
  try {
    const allCurrenciesRes = await axios.get(`https://v6.exchangerate-api.com/v6/${functions.config().keys.currencies}/latest/USD`)
    const blueDollarRes = await axios.get("https://api.bluelytics.com.ar/v2/latest")
    const prevDatabaseValues = await (await db.collection("api").doc("currencies").get()).data() as currencieDocumentProps
    
    const indexes: [string, number][] = Object.entries(allCurrenciesRes.data.conversion_rates)
    const formattedData: entryInterface[] = []
    let indexaux = 0
    for (let i = 0; i < indexes.length; i++) {
      if (indexaux === 8 && i === 8) {
        indexaux = indexaux + 1
        console.log("Estos son los precios que se están computando: ", indexes[i][1], prevDatabaseValues.data[indexaux].price);
        
      }
      const entry: entryInterface = {
        symbol: indexes[i][0],
        price: indexes[i][1],
        change: ((indexes[i][1]/prevDatabaseValues.data[indexaux].price) - 1) * 100
      }
      formattedData.push(entry)
      indexaux++
    }
    const dollarBlueEntry = {
      symbol: "ARSBL",
      price: blueDollarRes.data.blue.value_avg,
      change: ((blueDollarRes.data.blue.value_avg/prevDatabaseValues.data[8].price) - 1) * 100
    }
    formattedData.splice(8, 0, dollarBlueEntry)
    const list = {
      status: {
        lastUpdated: firestore.FieldValue.serverTimestamp()
      },
      data: formattedData
    }
    const result = await db.collection("api").doc("currencies").set(list)
    console.log("Divisas actualizadas", result.writeTime.toDate());
  } catch (err) {
  console.log("Error:", err);
  }
})

export const sendMail = functions.firestore.document("/mail/{document}").onCreate(async (snapshot) => {
  const data = snapshot.data() as mailData
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: `${functions.config().mail.user}`,
      pass: `${functions.config().mail.password}`,
    },
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: `${data.author} <${data.email}>`, // sender address
    to: `${functions.config().mail.user}`, // list of receivers
    subject: "Contacto - Platubi", // Subject line
    text: data.message, // plain text body
    html: `<p>${data.message}</p>`, // html body
  })
  .then(res => console.log("Sender:",res.envelope.from))
  .catch(reason => {
    transporter.sendMail({
      from: `PlatuBOT Platubi <${functions.config().mail.user}>`, // sender address
      to: `${functions.config().mail.user}`, // list of receivers
      subject: "ERROR DE CONTACTO - Platubi", // Subject line
      text: `${data.author} <${data.email}> ${reason} \n Original message:  ${data.message}`, // plain text body
      html: `<p><b style="color: red">Razón del error:</b>${reason}</p> <b>Original message:</b> <i>${data.author}</i> <br /> <${data.email}> <br/> ${data.message}.`, // html body
    })
  })
})
