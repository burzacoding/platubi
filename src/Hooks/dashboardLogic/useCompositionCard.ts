import { useApi } from "../../Contexts/ApiContext";
import { useDashboard } from "../../Contexts/DashboardContext";


const empty = {
  symbol: '--',
  value: 0,
  valueUSD: 0,
  name: '--',
  percentage: 0,
}

export const useCompositionCards = () => {
  const { userData } = useDashboard()
  const { cryptoPrices, currenciesPrices, currenciesList } = useApi()
  let arr = [empty, empty, empty, empty]

  const getObjectFromCryptoID = (id: number) => cryptoPrices.data.filter(el => el.id === id)[0]
  const getObjectFromCryptoSymbol = (symbol: string) => cryptoPrices.data.filter(el => el.symbol === symbol)[0]
  const getSymbolFromCryptoId = (id: number) => getObjectFromCryptoID(id).symbol

  if (userData && userData.registers) {
    const registers = userData.registers.map(el => el)
    const symbolsArray: string[] = []
    const namesArray: string[] = []
    const valuesArray: number[] = []
    const pricesArray: number[] = []
    const worthsArray: number[] = []
    if (registers?.length !== 0) {
      for (let register of registers!) {
        if (symbolsArray.indexOf(register.symbol) === -1) {
          if (/^\d+$/.test(register.symbol)) {
            symbolsArray.push(getSymbolFromCryptoId(parseInt(register.symbol)))
          } else {
            symbolsArray.push(register.symbol)
          }
        }
      }
      for (let symbolIndx = 0; symbolIndx < symbolsArray.length; symbolIndx++) {
        for (let register of registers) {
          if (!/^\d+$/.test(register.symbol)) {
            if (symbolsArray[symbolIndx] === register.symbol) {
              valuesArray[symbolIndx] = valuesArray[symbolIndx] ? valuesArray[symbolIndx] +  register.value : 0 + register.value
            }
          } else {
            if (symbolsArray[symbolIndx] === cryptoPrices.data.filter(el => String(el.id) === register.symbol)[0].symbol) {
              valuesArray[symbolIndx] = valuesArray[symbolIndx] ? valuesArray[symbolIndx] +  register.value : 0 + register.value
            }
          }
        }
      }
      for (let symbolIndx = 0; symbolIndx < symbolsArray.length; symbolIndx++) {
        const crypto = getObjectFromCryptoSymbol(symbolsArray[symbolIndx])
        if (crypto && crypto.symbol === symbolsArray[symbolIndx]) {
          namesArray.push(crypto.name)
          pricesArray.push(crypto.prices.price)
        }
        for (let currency of currenciesPrices.data) {
          if (pricesArray[symbolIndx] === undefined) {
            if (currency.symbol === symbolsArray[symbolIndx]) {
              const currencyName = currenciesList.data.filter(el => el.symbol === symbolsArray[symbolIndx])[0].name
              namesArray.push(currencyName)
              pricesArray.push(currency.price)
            }
          }
        }
      }
      // console.log(symbolsArray, pricesArray);
      // console.log(namesArray);
      // console.log('Comparando:', valuesArray[0], pricesArray[0]);
      // console.log('Comparando:', valuesArray[1], pricesArray[1]);
      
      // eslint-disable-next-line array-callback-return
      symbolsArray.map((el, index) => {
        const crypto = getObjectFromCryptoSymbol(el)
        if (crypto) {
          worthsArray.push(pricesArray[index] * valuesArray[index])
        } else {
          worthsArray.push(valuesArray[index] / pricesArray[index])
        }
      })
      // console.log('User actives:', userActives);
      // console.log('WorthsArray: ', worthsArray);
      const totalWorth = worthsArray.reduce((a, b) => a + b, 0)
      // console.log(+totalWorth.toFixed(2));
      const detailedArray = symbolsArray.map((el, index) => {
        return {
          symbol: symbolsArray[index],
          value: valuesArray[index],
          valueUSD: worthsArray[index],
          name: namesArray[index],
          percentage: Math.round((worthsArray[index] / totalWorth) * 100)
        }
      })
      const sortedDetailedArray = [...detailedArray].sort((a, b) => b.percentage - a.percentage)
      arr = [...sortedDetailedArray, ...arr]
      return arr
    }
  }
  
  
  
  
  return [arr[0], arr[1],arr[2], arr[3]]
}
