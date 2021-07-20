import { useApi } from "../../Contexts/ApiContext"
import { useDashboard } from "../../Contexts/DashboardContext"
import { checkIsCrypto } from "../../Utils/Utils"
import { useMainCalc } from "./useMainCalc"

const empty = ['--', '--', '']
const emptys = [empty, empty, empty] 

export const useWealthViewSymbols = () => {

  const { totalWorth } = useMainCalc()
  
  const { cryptoPrices, currenciesPrices, currenciesList } = useApi()
  
  const { userData } = useDashboard()
  
  const getObjectFromCryptoID = (id: number) => cryptoPrices.data.filter(el => el.id === id)[0]
  const getObjectFromCurrencySymbol = (id: string) => currenciesPrices.data.filter(el => el.symbol === id)[0]

  if (userData && userData.wealthViewSymbols && cryptoPrices.data && currenciesPrices.data) {
    if (totalWorth === 0) {
      return [['Añada registros!', 'Haga click en el boton "Añadir registro"', ''], ...emptys]
    } else {
      const wealthViewSymbols = userData.wealthViewSymbols.map(el => el)
      const result = wealthViewSymbols.map(el => {
        if (el) {
          if (checkIsCrypto(el)) {
            const object = getObjectFromCryptoID(parseInt(el))
            const totalValue = +(totalWorth / object.prices.price).toFixed(8)
            return [object.name, totalValue, '']
          } else {
            const object = getObjectFromCurrencySymbol(el)
            const totalValue = +(totalWorth * object.price).toFixed(2)
            
            const name = currenciesList.data.filter(ele => ele.symbol === el)[0].name
            return [name, totalValue, '$']
          }
        } else {
          return empty
        }
      })
      return [...result, ...emptys]
    }
  }
  return [['Añada cotizaciones!', 'Haga click en el engranaje', ''], ...emptys]
}
