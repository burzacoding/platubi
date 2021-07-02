import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as dotenv from "dotenv"
import axios from "axios"

dotenv.config({
  path: "./production.env"
})

interface cryptoApiInterface {
  status: {
      timestamp: string;
  };
  data: {
    id: number;
    name: string;
    symbol: string;
    quote: {
        USD: {
            price: number;
            percent_change_24h: number;
        };
    };
  }[]
}


admin.initializeApp();

const db = admin.firestore();

const apiUrl = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=1,1027,825,1839,2010,74,52,3408,6636,4687,7083,1831,2,5426,1975,3890,3717,512,1321,2416,8916,4943,3077,2280,1958,1765,328,5994,7278,3635,3602,4030,1518,4195,4023,4256,1376,2011,7186,6945,4172,3794,3957,1720,7129,3822,5805,2502,1168,4642,3718,5692,5034,1274,6719,2563,6892,2700,1437,4066,4157,131,2394,5864,873,5665,2634,2682,4847,2469,6758,2130,5567,8335,6535,1697,3330,1966,3155,2083,2586,2694,1727,2135,1684,1698,109,3945,1567,6538,1042,3897,2566,2499,1896,4779,2087,1808,3513,5617";

const axiosConfig = {
  headers: {
    "X-CMC_PRO_API_KEY": functions.config().crypto_api.key
  }
};

export const apiUpdater = functions.pubsub.schedule("*/15 * * * *").onRun(async () => {
  try {
    const res = await axios.get(apiUrl, axiosConfig);
    const data = res.data as cryptoApiInterface;
    const newList  = data.data.map(el => ({
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
          lastUpdated: res.data.status.timestamp
      },
      data: newList
    };
    const result = await db.collection("api").doc("crypto").set(list);
    console.log("Precios de CRYPTOS actualizadas, tiempo: ", result.writeTime.toDate().toDateString());
  } catch (err) {
    console.log("Error:" ,err);
  }
})
