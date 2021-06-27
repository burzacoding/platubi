import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useDashboard } from "./DashboardContext";

export interface ApiProviderProps {
  
}

const ApiContext = createContext({})

export function useApi() {
  return useContext(ApiContext)
}


 
export const ApiProvider: React.FC<ApiProviderProps> = ({children}) => {

  const { userData } = useDashboard()

  const SymbolsNeeded = userData
  

  useEffect(() => {
    console.log(SymbolsNeeded);
    
  }, [SymbolsNeeded])


  return (
    <ApiContext.Provider value='d'>
      {children}
    </ApiContext.Provider>
  );
}
