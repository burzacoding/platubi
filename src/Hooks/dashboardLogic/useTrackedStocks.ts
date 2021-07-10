import { useApi } from "../../Contexts/ApiContext"
import { useDashboard } from "../../Contexts/DashboardContext"
import { checkIsCrypto } from "../../Utils/Utils"

const emptyObj = {
  symbol: 'Vacío',
  value: '--',
  change: 0,
}

const emptiesObj = [emptyObj,emptyObj,emptyObj,emptyObj,emptyObj,emptyObj]

const empty =  ''

const emptys = [empty,empty,empty,empty,empty]

export const useTrackedStocks = () => {
  const { cryptoPrices, currenciesPrices } = useApi()
  const { userData } = useDashboard()

  if (cryptoPrices.data && currenciesPrices.data && userData) {
    const trackedStocks = userData.trackedStocks ? [...userData.trackedStocks, ...emptys] : emptys

    const map = trackedStocks.map(el => {
      if (el !== '') {
        if (checkIsCrypto(el)) {
          const obj = cryptoPrices.data.filter(eli => el === String(eli.id))[0]
          return {
            symbol: obj.name,
            value: `USD ${obj.prices.price.toFixed(4)}`,
            change: +obj.prices.change.toFixed(2)
          }
        }
        else {
          const obj = currenciesPrices.data.filter(eli => el === eli.symbol)[0]
          if (el === 'ARSBL') {
            return {
              symbol: 'Dólar blue',
              value: `ARS ${obj.price}`,
              change: +obj.change.toFixed(2)
            }
          } else {
            return {
              symbol: obj.symbol,
              value: `USD ${(1 / obj.price).toFixed(4)}`,
              change: +obj.change.toFixed(2)
            }
          }
        }
      }
      else {
        return emptyObj
      }
    })
    return [...map, ...emptiesObj]
  }

  return emptiesObj
}
