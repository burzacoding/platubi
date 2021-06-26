import { Container } from "../../elements/Dashboard/Donut";
import { Doughnut, Chart } from 'react-chartjs-2'
// import { useDashboard } from "../../Contexts/DashboardContext";
import { useState } from "react";
import Tooltips from "./Tooltips";

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

const data = {
  labels: ['ARS', 'USD', 'BTC', 'Otros'],
  datasets: [
    {
      label: '%',
      data: [75, 12, 8, 5],
      backgroundColor: ['#3480C1', '#0E4777', '#03A63C', '#006523'],
      hoverOffset: 16,
      offset: 8,
      borderRadius: 2,
      borderWidth: 0,
      borderAlign: 'center',
    },
  ],
};

const Donut: React.FC<DonutProps> = () => {

  // const { userData } = useDashboard()
  
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
        value: 5000,
        symbol: '$'
      });
      return
    }
  }

  // console.log('rerender');
  
  
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
