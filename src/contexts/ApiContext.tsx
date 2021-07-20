import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { db, FirebaseTimeStamp } from "../firebase/Firebase";
import firebase from 'firebase/app'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styled from "styled-components";
import { useAuth } from "./AuthContext";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.fontContrastFive};
`

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
  isAllTrue: boolean;
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

  const { currentUser } = useAuth()
  const [cryptoPrices, cryptoPricesSet] = useState<CryptoPricesInterface>({} as CryptoPricesInterface)
  const [cryptoList, cryptoListSet] = useState<cryptoOptionsInterface>({} as cryptoOptionsInterface)
  const [currenciesPrices, currenciesPricesSet] = useState<CurrenciesPricesInterface>({} as CurrenciesPricesInterface)
  const [currenciesList, currenciesListSet] = useState<currenciesOptionsInterface>({} as currenciesOptionsInterface)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allTrue = () => cryptoPrices.data !== undefined && cryptoList.data !== undefined && currenciesPrices.data !== undefined && currenciesList.data !== undefined
  const [isAllTrue, setIsAllTrue] = useState<boolean>(false)


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
  

  const retrieveDataFromAPi = async () => {
      const AuxData = await Promise.all([
        db.collection('api').doc('cryptoAux').get(),
        db.collection('api').doc('currenciesAux').get()
      ])
      cryptoListSet(AuxData[0].data() as cryptoOptionsInterface)
      currenciesListSet(AuxData[1].data() as currenciesOptionsInterface)
      
  }
  
  useEffect(() => {
      const unsuscribeOne = currentUser && db.collection('api').doc('crypto').onSnapshot((doc) => {
        const data = doc.data() as CryptoPricesInterface
        cryptoPricesSet(data)
        // console.log(`PRECIOS ACTUALIZADOS. \n Nueva fecha: ${data.status.lastUpdated.toDate()}`);
      })
      const unsuscribeTwo = currentUser && db.collection('api').doc('currencies').onSnapshot((doc) => {
        const data = doc.data() as CurrenciesPricesInterface
        currenciesPricesSet(data)
      })
      retrieveDataFromAPi()
    return () => {
      unsuscribeOne && unsuscribeOne()
      unsuscribeTwo && unsuscribeTwo()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])
  
  useEffect(() => {
      setIsAllTrue(allTrue())
  }, [allTrue, currenciesList.data])


  const values = {cryptoPrices, cryptoList, currenciesPrices, currenciesList, options, isAllTrue}

  return (
    <ApiContext.Provider value={values}>
      {children}
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
