import { Container } from "../../elements/Dashboard/Donut";
import { Doughnut, Chart } from 'react-chartjs-2'
import { useEffect } from "react";
import { useDashboard } from "../../contexts/DashboardContext";

Chart.defaults.plugins.legend.display = false
Chart.defaults.layout.padding = 4

export interface DonutProps {
  
}
const data = {
  labels: ['ARS', 'ARS', 'ARS', 'ARS'],
  datasets: [
    {
      label: '%',
      data: [75, 10, 10, 5],
      backgroundColor: ['#3480C1', '#0E4777', '#03A63C', '#006523'],
      borderColor: ['#3480C1', '#0E4777', '#03A63C', '#006523'],
      borderWidth: 0,
      hoverBorderWidth: 4,
      borderAlign: 'center'
    },
  ],
};

const options = {
  cutoutPercentage: 5,
  responsive: true,
  rotation: 60
}


const Donut: React.FC<DonutProps> = () => {

  const { userData } = useDashboard()

  useEffect(() => {
  
  }, [userData])

  return (
    <Container>
      <Doughnut type data={data} width={236} height={236} options={options} />
    </Container>
  );
}
 
export default Donut;
