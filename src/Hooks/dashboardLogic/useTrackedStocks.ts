import { useApi } from "../../Contexts/ApiContext"
import { useDashboard } from "../../Contexts/DashboardContext"

export const useTrackedStocks = () => {
  const { cryptoPrices, currenciesPrices } = useApi()
  const { userData } = useDashboard()

  if (cryptoPrices.data && currenciesPrices.data && userData) {
    
  }

  return false
}
