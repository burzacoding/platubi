import { useMainCalc } from "./useMainCalc"


const empty = {
  symbol: '--',
  value: 0,
  valueUSD: 0,
  name: '--',
  percentage: 0,
}

export const useCompositionCards = () => {
  let arr = [empty, empty, empty, empty]
  
  const detailedArray = useMainCalc()

    if (detailedArray) {
      const sortedDetailedArray = [...detailedArray].sort((a, b) => b.percentage - a.percentage)
      arr = [...sortedDetailedArray, ...arr]
      return arr
    }
  
  return [arr[0], arr[1],arr[2], arr[3]]
}
