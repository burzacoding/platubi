import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import firebase from 'firebase/app'
import { db } from "../firebase/Firebase";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { FormikValues } from "formik";
// import Axios from 'axios'

type DocumentData = firebase.firestore.DocumentData
export interface registerSchemaTypes {
  operation: string;
  symbol: string;
  value: number;
  createdAt: firebase.firestore.FieldValue;
  favorite: boolean;
  visible: boolean;
};
interface dashboardContextInterface {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  userData: userDocumentTypes | undefined;
  setUserData: React.Dispatch<React.SetStateAction<userDocumentTypes | undefined>>;
  addRegister(values: FormikValues): void
}

interface userDocumentTypes {
  wealthViewSymbols?: string[];
  wealthTrackedSymbols?: string[];
  registers?: registerSchemaTypes[];
  trackedStocks?: string[];
} 

export interface newRegisterValuesInterface {
  operation: string,
  symbol: string,
  value: number
}

const DashboardContext = createContext<dashboardContextInterface>({} as dashboardContextInterface)

export function useDashboard () {
  return useContext(DashboardContext)
}

 
export const DashboardProvider: React.FC = ({children}) => {
  
  const [page, setPage] = useState(0)
  const [newRegisters, setNewRegisters] = useState<registerSchemaTypes>()
  const [userData, setUserData] = useState<userDocumentTypes | undefined>()
  const { currentUser } = useAuth();
  
  
  function buildRegisterSchema({operation, symbol, value}: newRegisterValuesInterface): registerSchemaTypes {
    return {
      operation,
      symbol,
      value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      favorite: false,
      visible: true,
    }
  }
  function addRegisterToLocalUserData (schema: registerSchemaTypes) {
    const currentArr = userData?.registers
    currentArr?.unshift(schema)
    setUserData(prev => {
      return {
        ...prev,
        registers: currentArr
      }
    })
  }
  async function addRegisterToFirestore (schema: registerSchemaTypes) {
    try {
      setNewRegisters(schema)
      const newDocRef = await db.collection('user').doc(currentUser?.uid).collection('registers').add(newRegisters as DocumentData)
      setNewRegisters(undefined)
      return newDocRef.id
    }
    catch (e) {
      return new Error(`Error subiendo el nuevo registro a Firebase: ${e}`)
    }
  }
  function addRegister (values: FormikValues) {
    const newRegisterSchema = buildRegisterSchema(values as newRegisterValuesInterface)
    addRegisterToLocalUserData(newRegisterSchema)
    addRegisterToFirestore(newRegisterSchema)
  }

  async function retrieveDataFromUser () {
    try {
      if (!userData && currentUser) {
        const userDocument = await db.collection(`users`).doc(currentUser.uid).get()
        setUserData(userDocument.data() as userDocumentTypes)
        const registersCollection = await db.collection('users').doc(currentUser.uid).collection('registers').orderBy('createdAt', 'desc').get()
        const formattedRegisters = registersCollection.docs.map(el => el.data() as registerSchemaTypes)
        setUserData((prev) => ({
          ...prev,
          registers: formattedRegisters
        }))
      }
    }
    catch (error) {
      console.error(error)
    }
  }
  
  useEffect(() => {
    retrieveDataFromUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = { page, setPage, userData, setUserData, addRegister}
  
  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
