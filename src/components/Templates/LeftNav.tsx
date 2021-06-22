import { useDashboard } from "../../contexts/DashboardContext";
import { Container, SelectSheet, SelectSheetButton, SVGContainer } from "../../elements/Dashboard/LeftNav";
import Wallet from "../atoms/SVG/Wallet";

export interface LeftNavProps {
  
}
 
const LeftNav: React.FC<LeftNavProps> = () => {
  const { page, setPage } = useDashboard()
  const isCurrent = (position: number) => {
    return position === page
  }
  const setWallet = () => setPage(1)
  const setSettings = () => setPage(2)
  return (
    <Container>
      <SelectSheetButton onClick={setWallet}>
        <SVGContainer>
          <Wallet current={isCurrent(1)}/>
        </SVGContainer>
      </SelectSheetButton>
      <SelectSheetButton onClick={setSettings}>
        <SVGContainer>
          
        </SVGContainer>
      </SelectSheetButton>
      <SelectSheet />
    </Container>
  );
}
 
export default LeftNav;
