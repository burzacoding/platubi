import { useModal } from "../../Contexts/ModalContext";
import {  MainContainer, SmallContainer, MainTitle, Card, Title, Budget, BigCard, BigTitle } from "../../elements/Dashboard/WealthViewer";
import { useWealthViewSymbols } from "../../Hooks/dashboardLogic/useWealthViewSymbols";
import GearSVG from "../atoms/SVG/Gear";


const WealthViewer: React.FC = () => {
  const data = useWealthViewSymbols()
  const { openModal } = useModal()
  // const symbols = [['Pesos*', 10000, '$'], ['Dólares', 2500, '$'], ['Bitcoin', 0.045]]
  return (
    <MainContainer>
      <GearSVG onclick={() => openModal('wealthViewer')} />
      <MainTitle>Tu saldo estimado:</MainTitle>
      <SmallContainer>
      <BigCard>
        <BigTitle>{data[0][0]}</BigTitle>
        <Budget>{data[0][2]}{data[0][1]}</Budget>
      </BigCard>
        <Card>
        <Title>{data[1][0]}</Title>
        <Budget>{data[1][2]}{data[1][1]}</Budget>
        </Card>
        <Card>
        <Title>{data[2][0]}</Title>
        <Budget>{data[2][2]}{data[2][1]}</Budget>
        </Card>
      </SmallContainer>
    </MainContainer>
  )
}

export default WealthViewer;
