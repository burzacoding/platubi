import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import firebase from 'firebase/app'
import { db, registersCollectionRef, userDocumentRef } from "../firebase/Firebase";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { buildRegisterSchema, mapRegistersWithId } from "../Utils/Utils";
import { TooltipsPropsWithIndex } from "../components/molecules/Donut";
// import Axios from 'axios'

export type DocumentData = firebase.firestore.DocumentData
export type QuerySnapshotDocumentData = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>

export interface buildSchemaInterface {
  local:  localRegisterSchemaTypes,
  remote: remoteRegisterSchemaTypes,
}
export interface registerSchemaTypes {
  operation: string;
  symbol: string;
  value: number;
  createdAt: firebase.firestore.Timestamp;
  favorite: boolean;
  visible: boolean;
};
export interface registerSchemaTypesWithId {
  operation: string;
  symbol: string;
  value: number;
  createdAt: string;
  favorite: boolean;
  visible: boolean;
  key: string
};
export interface localRegisterSchemaTypes {
  operation: string;
  symbol: string;
  value: number;
  createdAt: string;
  favorite: boolean;
  visible: boolean;
};
export interface remoteRegisterSchemaTypes {
  operation: string;
  symbol: string;
  value: number;
  createdAt: firebase.firestore.FieldValue;
  favorite: boolean;
  visible: boolean;
};
export interface receivedRemoteRegisterSchemaTypes {
  operation: string;
  symbol: string;
  value: number;
  createdAt: firebase.firestore.Timestamp;
  favorite: boolean;
  visible: boolean;
};
interface dashboardContextInterface {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  userData: userDocumentTypes | undefined;
  setUserData: React.Dispatch<React.SetStateAction<userDocumentTypes | undefined>>;
  addRegister: (values: newRegisterValuesInterface) => Promise<boolean>;
  deleteRegister(key: string): void;
}

interface userDocumentTypes {
  wealthViewSymbols?: string[];
  wealthTrackedSymbols?: string[];
  registers?: registerSchemaTypesWithId[];
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

//TOOLTIP CONTEXT

interface TooltipContextInterface {
  tooltipData: TooltipsPropsWithIndex;
  setTooltipData: React.Dispatch<React.SetStateAction<TooltipsPropsWithIndex>>;
}

const TooltipContext = createContext({} as TooltipContextInterface)

export function useTooltip () {
  return useContext(TooltipContext)
}

 
export const DashboardProvider: React.FC = ({children}) => {
  
  const [page, setPage] = useState(0)
  const [userData, setUserData] = useState<userDocumentTypes | undefined>()
  const { currentUser } = useAuth();
  
  async function addRegisterToFirestore (schema: remoteRegisterSchemaTypes) {
    try {
      return db.collection('users').doc(currentUser?.uid).collection('registers').add(schema as DocumentData)
      .then((newDocRef) => {
        return newDocRef.id
      })
    }
    catch (err) {
      throw new Error(`subiendo el nuevo registro a Firebase: ${err}.`)
    }
  }

  function addRegisterToLocalUserData (schema: localRegisterSchemaTypes, newId: string) {
    const schemaWithDocId = {...schema, key: newId}
    const currentArr = userData?.registers
    currentArr?.unshift(schemaWithDocId)
    setUserData(prev => {
      return {
        ...prev,
        registers: currentArr
      }
    })
  }
  function addRegister (values: newRegisterValuesInterface) {
    const {local, remote} = buildRegisterSchema(values)
    return addRegisterToFirestore(remote)
    .then(newId => {
      addRegisterToLocalUserData(local, newId)
      return true
    })
    .catch(err => {
      throw new Error(`Error añadiendo registro: ${err}`)
    })
  }

  function deleteRegister (key: string) {
    if (currentUser) {
      return registersCollectionRef(currentUser.uid).doc(key).delete()
      .then(() => true)
      .catch(err => {
        throw new Error(`Error borrando el documento (id: ${key}) de la colección de registros: ${err}`)
      })
    }
  }

  async function retrieveDataFromUser () {
    try {
      if (!userData && currentUser) {
        const userDocument = await userDocumentRef(currentUser.uid).get()
        setUserData(userDocument.data() as userDocumentTypes)
        const registersCollection = await registersCollectionRef(currentUser.uid).orderBy('createdAt', 'desc').get()
        const formattedRegisters = registersCollection.docs.map(element => mapRegistersWithId(element))
        setUserData(prev => ({...prev,registers: formattedRegisters}))
      }
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    retrieveDataFromUser()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])

  const value = { page, setPage, userData, setUserData, addRegister, deleteRegister}

  const [tooltipData, setTooltipData] = useState<TooltipsPropsWithIndex>({} as TooltipsPropsWithIndex)

  const valueTooltip = {tooltipData, setTooltipData}
  
  return (
    <DashboardContext.Provider value={value}>
      <TooltipContext.Provider value={valueTooltip}>
        {children}
      </TooltipContext.Provider>
    </DashboardContext.Provider>
  );
}
