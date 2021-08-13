import create from "zustand";
import { TooltipsPropsWithIndex } from "../../components/molecules/Donut";

interface DonutStoreInterface {
  tooltipData: TooltipsPropsWithIndex,
  setTooltipData: (tooltip: DonutCallbackInterface, sortedArray: any) => void
}

interface DonutCallbackInterface {
  dataIndex: number,
  label: string,
  raw: number,
  value?: number,
  symbol?: string
}


export const useDonutStore = create<DonutStoreInterface>((set, get) => ({
  tooltipData: {
    label: "",
    percentage: 0,
    dataIndex: -1,
    value: 0,
    symbol: ""
  },
  setTooltipData: (tooltip, sortedArray) =>  set(prev => {
    const state = prev.tooltipData
    const bool = state.label === tooltip.label && state.percentage === tooltip.raw && state.dataIndex === tooltip.dataIndex
    
    if (!bool) {
      const newTooltip: TooltipsPropsWithIndex = {
        dataIndex: tooltip.dataIndex,
        label: tooltip.label,
        percentage: tooltip.raw,
        value: +sortedArray[tooltip.dataIndex].valueUSD.toFixed(2),
        symbol: '$'
      }
      return ({
        tooltipData: newTooltip
      })
    } else if (prev.tooltipData?.symbol === tooltip.symbol && prev.tooltipData.percentage !== tooltip.raw) {
      return ({
        tooltipData: {
          dataIndex: tooltip.dataIndex,
          label: tooltip.label,
          percentage: tooltip.raw,
          value: +sortedArray[tooltip.dataIndex].valueUSD.toFixed(2),
          symbol: '$'
        }
      })
    }
    return ({
      tooltipData: prev.tooltipData
    })
  })
}))
