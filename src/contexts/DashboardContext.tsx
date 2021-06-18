import { type } from "os";
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
import firebase from 'firebase/app'
import { db } from "../firebase/Firebase";
// import { useEffect } from "react";
// import { useAuth } from "./AuthContext";
// import Axios from 'axios'
// import { db } from "../firebase/Firebase";

// interface DashboardContextTypes {
//   page: number;
//   setPage: React.Dispatch<React.SetStateAction<number>>;
//   userData: {
//       wealthViewSymbols: string[];
//       wealthTrackedSymbols: string[];
//       registers: never[];
//       trackedStocks: string[];
//   };
//   setUserData: React.Dispatch<React.SetStateAction<{
//     wealthViewSymbols: string[];
//     wealthTrackedSymbols: string[];
//     registers: never[];
//     trackedStocks: string[];
// }>>
// }

const DashboardContext = createContext<any>(null)

export function useDashboard () {
  return useContext(DashboardContext)
} 
  
 
export const DashboardProvider: React.FC = ({children}) => {

  const [page, setPage] = useState(0)
  const [userData, setUserData] = useState<null | object>(null)

  function buildRegisterSchema(operation: string, symbol: string, value: number, currentUserUid: string) {
    return {
      operation,
      symbol,
      value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      favorite: false,
      visible: true,
    }
  }

  const value = {
    page,
    setPage,
    userData,
    setUserData,
    buildRegisterSchema,

  }

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
