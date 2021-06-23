import { useDashboard } from "../../Contexts/DashboardContext";
import { Container, SelectSheetButton, SVGContainer } from "../../elements/Dashboard/LeftNav";
import GearNav from "../atoms/SVG/GearNav";
import Wallet from "../atoms/SVG/Wallet";

export interface LeftNavProps {
  
}
 
const LeftNav: React.FC<LeftNavProps> = () => {
  const { page, setPage } = useDashboard()
  const isCurrent = (position: number) => {
    return position === page
  }
  const setWallet = () => setPage(0)
  const setSettings = () => setPage(1)
  return (
    <Container>
      <SelectSheetButton 
        currentPage={page}
        pageNumber={0}
        onClick={setWallet}>
        <SVGContainer whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
          <Wallet current={isCurrent(0)}/>
        </SVGContainer>
      </SelectSheetButton>
      <SelectSheetButton
        currentPage={page}
        pageNumber={1}
        onClick={setSettings}>
        <SVGContainer whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.85 }}>
          <GearNav current={isCurrent(1)}/>
        </SVGContainer>
      </SelectSheetButton>
    </Container>
  );
}
 
export default LeftNav;
