import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { db } from "../firebase/Firebase";
import firebase from 'firebase/app'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export interface ApiContextInterface {
  cryptoPrices: CryptoPricesInterface;
  cryptoList: cryptoOptionsInterface;
  currenciesPrices: CurrenciesPricesInterface;
  currenciesList: currenciesOptionsInterface;
  options: false | {
    label: string;
    options: {
        value: string;
        label: string;
    }[];
}[];
}

export interface currenciesOptionsInterface {
  data: {
    symbol: string;
    name: string;
  }[]
}

export interface cryptoOptionsInterface {
  data: {
    value: string,
    name: string,
    symbol: string
  }[]
}

export interface cryptoAuxDocInterface {
  data: cryptoOptionsInterface[],
  status: {
    lastUpdated: firebase.firestore.Timestamp
  }
}
export interface currencyAuxDocInterface {
  data: currenciesOptionsInterface[],
  status: {
    lastUpdated: firebase.firestore.Timestamp
  }
}

export interface CryptoPricesInterface {
  data: {
    id: number,
    name: string,
    symbol: string,
    prices: {
      price: number,
      change: number
    }
  }[],
  status: {
    lastUpdated: firebase.firestore.Timestamp
  }
}

export interface CurrenciesPricesInterface {
  data: {
    symbol: string,
    price: number,
    change: number
  }[],
  status: {
    lastUpdated: firebase.firestore.Timestamp
  }
}

const ApiContext = createContext({} as ApiContextInterface)

export function useApi() {
  return useContext(ApiContext)
}

 
export const ApiProvider: React.FC = ({children}) => {

  // const { userData } = useDashboard()

  const [cryptoPrices, cryptoPricesSet] = useState<CryptoPricesInterface>({} as CryptoPricesInterface)
  const [cryptoList, cryptoListSet] = useState<cryptoOptionsInterface>({} as cryptoOptionsInterface)
  const [currenciesPrices, currenciesPricesSet] = useState<CurrenciesPricesInterface>({} as CurrenciesPricesInterface)
  const [currenciesList, currenciesListSet] = useState<currenciesOptionsInterface>({} as currenciesOptionsInterface)

  const allTrue = () => {
    return cryptoPrices.data !== undefined && cryptoList.data !== undefined && currenciesPrices.data !== undefined && currenciesList.data !== undefined
  }

  const options = allTrue() && [
    {
        label: 'Divisas',
        options: currenciesList.data.map(el => ({
          value: el.symbol,
          label: `${el.symbol} - ${el.name}`
        }))
    },
    {
        label: 'Criptomonedas',
        options: cryptoList.data.map(el => ({
          value: el.value,
          label: `${el.symbol} - ${el.name}`
        }))
    }
  ]
  
  useEffect(() => {
    const unsuscribeCryptoPrices = db.collection('api').doc('crypto').onSnapshot((doc) => {
      const data = doc.data() as CryptoPricesInterface
      cryptoPricesSet(data)
      // console.log(`PRECIOS ACTUALIZADOS. \n Nueva fecha: ${data.status.lastUpdated.toDate()}`);
    })
    db.collection('api').doc('cryptoAux').get()
    .then(res => {
      cryptoListSet(res.data() as cryptoOptionsInterface)
    })
    const unsuscribeCurrenciesPrices = db.collection('api').doc('currencies').onSnapshot((doc) => {
      const data = doc.data() as CurrenciesPricesInterface
      currenciesPricesSet(data)
    })
    db.collection('api').doc('currenciesAux').get()
    .then(res => {
      currenciesListSet(res.data() as currenciesOptionsInterface)
    })

    return () => {
      unsuscribeCryptoPrices()
      unsuscribeCurrenciesPrices()
    }

  }, [])


  const values = {cryptoPrices, cryptoList, currenciesPrices, currenciesList, options}

  return (
    <ApiContext.Provider value={values}>
      {allTrue() ? children : (
      <div style={{width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Loader type="Oval" />
      </div>
      )}
    </ApiContext.Provider>
  );
}



// const map = CryptoOptions.map(el => {
//   const name = el.label.split(' - ')
//   return {
//     value: el.value,
//     name: name[1],
//     symbol: name[0]
//   }
// })
// db.collection('api').doc('cryptoAux').set({
//   data: map
// }).then(log => {
//   console.log('crpytoAux actualizado.');
// })


// const map = CurrenciesOptionsFull.map(el => {
//   const name = el.label.split(' - ')
//   return {
//     name: name[1],
//     symbol: name[0]
//   }
// })
// db.collection('api').doc('currenciesAux').set({
//   data: map
// }).then(log => {
//   console.log('currenciesAux actualizado.');
// })
