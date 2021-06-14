import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const DashboardContext = createContext<any>(null)

export function useDashboard () {
  return useContext(DashboardContext)
} 
  
 
export const DashboardProvider: React.FC = ({children}) => {

  const [page, setPage] = useState(0)

  const value = {
    page,
    setPage
  }

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
