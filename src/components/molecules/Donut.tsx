import { Container } from "../../elements/Dashboard/Donut";
import { Doughnut, Chart } from 'react-chartjs-2'
// import { useDashboard } from "../../Contexts/DashboardContext";
import { useEffect } from "react";
import Tooltips from "./Tooltips";
import { useMainCalc } from "../../hooks/dashboardLogic/useMainCalc";
import { useDonutStore } from "../../zustand/stores/Donut";
import { useMemo } from "react";

Chart.defaults.plugins.legend.display = false
export interface DonutProps {
  
}
export interface TooltipsPropsWithIndex {
  dataIndex: number,
  label: string,
  percentage: number,
  symbol?: string,
  value: number
}

const empty = {
  symbol: '--',
  value: 0,
  valueUSD: 0,
  name: '--',
  percentage: 0,
  price: 0
}

const Donut: React.FC<DonutProps> = () => {

  const { detailedArray } = useMainCalc()
  const setTooltipData = useDonutStore(state => state.setTooltipData)

  const sortedArray = useMemo(() => [...detailedArray.sort((a, b) => b.percentage - a.percentage), empty, empty, empty, empty], [detailedArray])

  const labels = sortedArray.map(el => el.symbol)
  const percentages = sortedArray.map(el => el.percentage)

  const data = {
    labels: [labels[0], labels[1], labels[2], 'Otros'],
    datasets: [
      {
        label: '%',
        data: [percentages[0], percentages[1], percentages[2], (100 - percentages[0] - percentages[1] - percentages[2])],
        backgroundColor: ['#3480C1', '#0E4777', '#03A63C', '#006523'],
        hoverOffset: 16,
        offset: 8,
        borderRadius: 2,
        borderWidth: 0,
        borderAlign: 'center',
      },
    ],
  };
  
  const startingOptions = {
    cutout: '65%',
    layout: {
      padding: 12,
    },
    animation: {
      animateRotate: false
    },
    plugins : {
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0)',
        callbacks: {
          label: function (tooltip: any) {
            setTooltipData(tooltip, sortedArray)
          }
        },
      }
    },
  }

  useEffect(() => {
    if (sortedArray[0].valueUSD) {
      setTooltipData({
        dataIndex: 0,
        label: labels[0],
        raw: percentages[0],
        value: +sortedArray[0].valueUSD.toFixed(2)
      }, sortedArray)
    }
  }, [labels, percentages, setTooltipData, sortedArray])
  
  
  return (
    <Container>
      <Doughnut type data={data} width={236} height={236} options={startingOptions} redraw={false}/>
      <Tooltips />
    </Container>
  );
}
 
export default Donut;
