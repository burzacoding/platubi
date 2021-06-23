import { Container } from "../../elements/Dashboard/Donut";
import { Doughnut, Chart } from 'react-chartjs-2'
import { useEffect } from "react";
import { useDashboard } from "../../Contexts/DashboardContext";
import { useState } from "react";
import Tooltips from "./Tooltips";

Chart.defaults.plugins.legend.display = false

export interface DonutProps {
  
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

const startingOptions = {
  cutout: '65%',
  responsive: true,
  rotation: 90,
  layout: {
    padding: 12,
  },
  plugins: {
    tooltip: {

    }
  }
}


const Donut: React.FC<DonutProps> = () => {

  const { userData } = useDashboard()
  const [options, setOptions] = useState(startingOptions)

  useEffect(() => {
    setOptions(prev => {
      return({
        ...prev,
        animation: {
          animateRotate: false
        }
      })
    })
  }, [userData])

  return (
    <Container>
      <Doughnut type data={data} width={236} height={236} options={options}/>
    </Container>
  );
}
 
export default Donut;
