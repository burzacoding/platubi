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

// interface dataInterface {
//   status: {
//       lastUpdated: any;
//   };
//   data: {
//       id: number;
//       name: string;
//       symbol: string;
//       prices: {
//           price: number;
//           change: number;
//       };
//   }[];
// }

 
export const ApiProvider: React.FC<ApiProviderProps> = ({children}) => {

  const { userData } = useDashboard()

  const SymbolsNeeded = {...userData}
  if (SymbolsNeeded) {
    console.log('');
  }
  
  
  // const retrieveCryptos = async () => {
  //   const res = await (await db.collection('api').doc('crypto').get()).data() as unknown as dataInterface
  //   const document = res.data.map(el => ({
  //     value: el.id,
  //     label: `${el.symbol} - ${el.name}`
  //   }))
  //   console.log(document);
  // }

  useEffect(() => {
    // console.log(SymbolsNeeded);
    
  }, [])


  return (
    <ApiContext.Provider value='d'>
      {children}
    </ApiContext.Provider>
  );
}
