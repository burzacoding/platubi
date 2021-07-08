import { useApi } from "../../Contexts/ApiContext";
import { useDashboard } from "../../Contexts/DashboardContext";


export const useMainCalc = () => {
  
  const { userData } = useDashboard()
  const { cryptoPrices, currenciesPrices, currenciesList } = useApi()

  const getObjectFromCryptoID = (id: number) => cryptoPrices.data.filter(el => el.id === id)[0]
  const getSymbolFromCryptoId = (id: number) => getObjectFromCryptoID(id).symbol
  const getObjectFromCryptoSymbol = (symbol: string) => cryptoPrices.data.filter(el => el.symbol === symbol)[0]

  
  const worthsArray: number[] = []

  if (userData && userData.registers) {
    const registers = userData.registers.filter(el => el.visible === true)
    const symbolsArray: string[] = []
    const namesArray: string[] = []
    const valuesArray: number[] = []
    const pricesArray: number[] = []
    
    if (registers?.length !== 0) {
      for (let register of registers!) {
        // console.log(register.symbol);
        if (register.isCrypto) {
          if (symbolsArray.indexOf(getSymbolFromCryptoId(parseInt(register.symbol))) === -1) {
            symbolsArray.push(getSymbolFromCryptoId(parseInt(register.symbol)))
          }
        } else {
          if (symbolsArray.indexOf(register.symbol) === -1) {
            symbolsArray.push(register.symbol)
          }
        }
        // console.log('Vuelta: ', register.symbol, 'symbolsArray: ', symbolsArray);
      }
      // console.log('symbolsArray: ', symbolsArray);
      
      for (let symbolIndx = 0; symbolIndx < symbolsArray.length; symbolIndx++) {
        for (let register of registers) {
          // console.log(typeof register.value, register.value);
          if (!register.isCrypto) {
            if (symbolsArray[symbolIndx] === register.symbol) {
              valuesArray[symbolIndx] = valuesArray[symbolIndx] ? valuesArray[symbolIndx] +  register.value : 0 + register.value
            }
          } else {
            if (symbolsArray[symbolIndx] === getSymbolFromCryptoId(parseInt(register.symbol))) {
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
          percentage: Math.round((worthsArray[index] / totalWorth) * 100),
          price: pricesArray[index]
        }
      })
      // console.log('DetailedArray:' ,detailedArray);
      
      return {detailedArray, totalWorth}
    }
  }

  const totalWorth = 0

  return { totalWorth }
}
