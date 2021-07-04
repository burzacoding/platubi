import { useState } from "react";
import { useApi } from "../../Contexts/ApiContext";
import { registerSchemaTypesWithId, useDashboard } from "../../Contexts/DashboardContext";


const empty = {
  symbol: '--',
  value: '--',
  name: '--',
  percentage: '--'
}

export const useCompositionCards = () => {
  const { userData } = useDashboard()
  const { cryptoPrices, currenciesPrices } = useApi()
  const arr = [empty, empty, empty, empty]

  if (userData && userData.registers) {
    const registers = userData.registers.map(el => el)
    const symbolsArray: string[] = []
    const valuesArray: number[] = []
    const pricesArray: number[] = []
    const worthsArray: number[] = []
    if (registers?.length !== 0) {
      for (let register of registers!) {
        symbolsArray.indexOf(register.symbol) === -1 && symbolsArray.push(register.symbol) 
      }
      for (let symbolIndx = 0; symbolIndx < symbolsArray.length; symbolIndx++) {
        for (let register of registers) {
          if (symbolsArray[symbolIndx] === register.symbol) {
            valuesArray[symbolIndx] = valuesArray[symbolIndx] ? valuesArray[symbolIndx] +  register.value : 0 + register.value
          }
        }
      }
      
      for (let symbolIndx = 0; symbolIndx < symbolsArray.length; symbolIndx++) {
        for (let crypto of cryptoPrices.data) {
          if (crypto.symbol === symbolsArray[symbolIndx]) {
            pricesArray.push(crypto.prices.price)
          }
        }
        for (let currency of currenciesPrices.data) {
          if (pricesArray[symbolIndx] === undefined) {
            if (currency.symbol === symbolsArray[symbolIndx]) {
              pricesArray.push(currency.price)
            }
          }
        }
      }
      console.log(symbolsArray, pricesArray);
      
      const userActives = symbolsArray.map((el, index) => {
        worthsArray.push(+(valuesArray[index] / pricesArray[index]).toFixed(2))
        return {
          symbol: symbolsArray[index],
          amount: valuesArray[index],
          worth: +(valuesArray[index] / pricesArray[index]).toFixed(2)
        }
      })

      console.log(userActives, worthsArray);
      

      const totalWorth = worthsArray.reduce((a, b) => a + b, 0)

      console.log(+totalWorth.toFixed(2));
      
      
    }
  }
  
  
  
  
  return [arr[0], arr[1],arr[2], arr[3]]
}
