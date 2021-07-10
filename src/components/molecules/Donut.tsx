import { Container } from "../../elements/Dashboard/Donut";
import { Doughnut, Chart } from 'react-chartjs-2'
// import { useDashboard } from "../../Contexts/DashboardContext";
import { useEffect, useState } from "react";
import Tooltips from "./Tooltips";
import { useMainCalc } from "../../Hooks/dashboardLogic/useMainCalc";

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


const Donut: React.FC<DonutProps> = () => {

  const { detailedArray } = useMainCalc()

  const sortedArray = detailedArray.sort((a, b) => b.percentage - a.percentage)

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
  
  const [tooltipData, setTooltipData] = useState<TooltipsPropsWithIndex>()
  
  const startingOptions = {
    cutout: '65%',
    rotation: 90,
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
          label: function (tooltip: any) {labelTooltip(tooltip)}
        },
      }
    },
  }

  const labelTooltip = (tooltip: any) => {
    if (tooltipData?.dataIndex !== tooltip.dataIndex) {
      setTooltipData({
        dataIndex: tooltip.dataIndex,
        label: tooltip.label,
        percentage: tooltip.raw,
        value: +sortedArray[tooltip.dataIndex].valueUSD.toFixed(2),
        symbol: '$'
      });
      return
    }
  }

  useEffect(() => {
    setTooltipData({
      dataIndex: 0,
      label: labels[0],
      percentage: percentages[0],
      value: sortedArray[0] ? +sortedArray[0].valueUSD.toFixed(2) : 0,
      symbol: '$'
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortedArray])
  
  
  return (
    <Container>
      <Doughnut type data={data} width={236} height={236} options={startingOptions} redraw={false}/>
      {tooltipData && <Tooltips 
                        label={tooltipData.label} 
                        percentage={tooltipData.percentage} 
                        value={tooltipData.value}
                        symbol={tooltipData.symbol}
                        />}
    </Container>
  );
}
 
export default Donut;
