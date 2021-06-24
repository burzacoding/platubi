import { Container } from "../../elements/Dashboard/Donut";
import { Doughnut, Chart } from 'react-chartjs-2'
// import { useDashboard } from "../../Contexts/DashboardContext";
import { useState } from "react";
import Tooltips from "./Tooltips";

Chart.defaults.plugins.legend.display = false

export interface DonutProps {
  
}
interface TooltipsPropsWithIndex {
  dataIndex: number,
  label: string,
  percentage: number,
  symbol?: string,
  value: number
}

const data = {
  labels: ['ARS', 'ARS', 'ARS', 'ARS'],
  datasets: [
    {
      label: '%',
      data: [75, 10, 10, 5],
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
    responsive: true,
    rotation: 90,
    layout: {
      padding: 12,
    },
    plugins : {
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0)',
        callbacks: {
          label: function (tooltip: any) {
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
        },
      }
    },
    animation: {
      animateRotate: false
    }
  }
  
  return (
    <Container>
      <Doughnut type data={data} width={236} height={236} options={startingOptions}/>
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
