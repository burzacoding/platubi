import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import firebase from 'firebase/app'
import { db, registersCollectionRef, userDocumentRef } from "../firebase/Firebase";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import { buildRegisterSchema, mapRegistersWithId, stateSetter } from "../Utils/Utils";
import { TooltipsPropsWithIndex } from "../components/molecules/Donut";


// import Axios from 'axios'

export type DocumentData = firebase.firestore.DocumentData
export type QuerySnapshotDocumentData = firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>

export type wealthViewerItem = string
export type WealthViewSymbolsType = [wealthViewerItem, wealthViewerItem, wealthViewerItem]

export interface buildSchemaInterface {
  local:  localRegisterSchemaTypes,
  remote: remoteRegisterSchemaTypes,
}
export interface registerSchemaTypes {
  operation: 'add' | 'remove' | 'exchange';
  symbol: string;
  value: number;
  createdAt: firebase.firestore.Timestamp;
  favorite: boolean;
  visible: boolean;
  isCrypto: boolean;
};
export interface registerSchemaTypesWithId {
  operation: 'add' | 'remove' | 'exchange';
  symbol: string;
  value: number;
  createdAt: string;
  favorite: boolean;
  visible: boolean;
  key: string
  isCrypto: boolean;
};
export interface localRegisterSchemaTypes {
  operation: 'add' | 'remove' | 'exchange';
  symbol: string;
  value: number;
  createdAt: string;
  favorite: boolean;
  visible: boolean;
  isCrypto: boolean;
};
export interface remoteRegisterSchemaTypes {
  operation: 'add' | 'remove' | 'exchange';
  symbol: string;
  value: number;
  createdAt: firebase.firestore.FieldValue;
  favorite: boolean;
  visible: boolean;
  isCrypto: boolean;
};
export interface receivedRemoteRegisterSchemaTypes {
  operation: 'add' | 'remove' | 'exchange';
  symbol: string;
  value: number;
  createdAt: firebase.firestore.Timestamp;
  favorite: boolean;
  visible: boolean;
  isCrypto: boolean;
};
interface dashboardContextInterface {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  userData: userDocumentTypes | undefined;
  setUserData: stateSetter<userDocumentTypes | undefined>;
  addRegister: (values: newRegisterValuesInterface) => Promise<boolean>;
  updateRegister: (key: string, newValues: object) => Promise<boolean>;
  deleteRegister(key: string): Promise<boolean>;
  updateWealthViewer(document: [wealthViewerItem, wealthViewerItem, wealthViewerItem]): Promise<boolean>;
  updateTrackedStocks(document: any): Promise<boolean>;
}

interface userDocumentTypes {
  wealthViewSymbols?: [wealthViewerItem, wealthViewerItem, wealthViewerItem];
  wealthTrackedSymbols?: string[];
  registers?: registerSchemaTypesWithId[];
  trackedStocks?: string[];
} 

export interface newRegisterValuesInterface {
  operation: 'add' | 'remove' | 'exchange',
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
  const [userData, setUserData] = useState<userDocumentTypes>()
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
      return registersCollectionRef(currentUser!.uid).doc(key).delete()
      .then(() => {
        const stagedRegisters = [...userData!.registers!].filter(el => el.key !== key)
        console.log(`
        Registro a ser removido: ${key}.
        Registros anteriores: ${userData!.registers!.map(el => el.key)}
        Registros nuevos: ${stagedRegisters.map(el => el.key)}
      `);
        setUserData(prev => ({
          ...prev,
          registers: stagedRegisters
        }))
        return true
      })
      .catch(err => {
        throw new Error(`Error borrando el documento (id: ${key}) de la colección de registros: ${err}`)
      })
  }

  async function updateRegister (key: string, newValues: object) {
      return registersCollectionRef(currentUser!.uid).doc(key).update(newValues)
      .then(() => true)
  }

  async function retrieveDataFromUser () {
    try {
      if (!userData && currentUser) {
        let userDocument = await userDocumentRef(currentUser.uid).get()
        if (!userDocument.data()) {
          await userDocumentRef(currentUser.uid).set({
            wealthViewSymbols: ['', '', ''],
            trackedStocks: ['74', '1', 'ARSBL', '', '' ,'']
          })
          userDocument = await userDocumentRef(currentUser.uid).get()
        }
        const registersCollection = await registersCollectionRef(currentUser.uid).orderBy('createdAt', 'desc').get()
        
        const formattedRegisters = registersCollection.docs.map(element => mapRegistersWithId(element))
        setUserData({...userDocument.data(), registers: formattedRegisters})
      }
    }
    catch (error) {
      console.error(error)
    }
  }
  

  async function updateWealthViewer (document: WealthViewSymbolsType ) {
    try {
      await userDocumentRef(currentUser!.uid).update({
        wealthViewSymbols: document
      })
      setUserData(prev => ({
        ...prev,
        wealthViewSymbols: document
      }))
      return true
    } catch (error) {
      throw new Error(`Error actualizando las cotizaciones mostradas: ${error}.`)
    }
  }
  
  async function updateTrackedStocks (document: string[] ) {
    try {
      await userDocumentRef(currentUser!.uid).update({
        trackedStocks: document
      })
      setUserData(prev => ({
        ...prev,
        trackedStocks: document
      }))
      return true
    } catch (error) {
      throw new Error(`Error actualizando los activos seguidos: ${error}.`)
    }
  }



  useEffect(() => {
    retrieveDataFromUser()
    if (!currentUser) {
      setUserData(undefined)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser])

  const value = { page, setPage, userData, setUserData, addRegister, deleteRegister, updateRegister, updateWealthViewer, updateTrackedStocks}

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
