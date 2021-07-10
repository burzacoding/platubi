// import { useDashboard } from "../../../contexts/DashboardContext";
import { BackToDashboard, Container, Frame } from "../../../elements/Dashboard";
import { useDashboard } from "../../../Contexts/DashboardContext";
import Registers from "../../Templates/Registers";
import WealthViewer from "../../molecules/WealthViewer";
import TrackedStocks from "../../Templates/TrackedStocks";
import WealthTrackedSymbols from "../../Templates/WealthTrackedSymbols";
import LeftNav from "../../Templates/LeftNav";
import AuthFrame from "../Auth/AuthFrame";
import { ContainerBase, Title } from "../Auth/Styles";

 
const Dashboard: React.FC = () => {
  const { page, setPage } = useDashboard()
  const withAds = () => 'false'
  return (
    <Container>
      <LeftNav />
      { page === 0 ? (
        <Frame withAds={withAds()}>
          <WealthViewer />
          <Registers />
          <WealthTrackedSymbols />
          <TrackedStocks  />
        </Frame>
      ):
      (
        <AuthFrame>
          <ContainerBase>
            <Title>Ajustes</Title>
            <h1 style={{textAlign: 'center'}}>Sitio en construcción.</h1>
            <br />
            <br />
            <BackToDashboard onClick={() => setPage(0)}>&gt;Volver al panel principal&lt;</BackToDashboard>
          </ContainerBase>
        </AuthFrame>
      )}
    </Container>
  );
}
 
export default Dashboard;

