import { useState } from "react";
import { useDashboard } from "../../contexts/DashboardContext";
import { Container, Top, Bottom, Text, SVGContainer } from '../../elements/Dashboard/Registers'
import StarSVG from "../atoms/SVG/StarSVG";
import NoRegisters from "../molecules/NoRegisters";
import RegisterField from "../molecules/RegisterField";
import RegistersLoader from "../molecules/RegistersLoader";

const Registers: React.FC = () => {

  const { userData } = useDashboard()
  const [isFavorite, setIsFavorite] = useState(false)
  const registersExists = userData?.registers?.length !== 0

  const mapUserData = () =>  userData?.registers?.map((obj) => <RegisterField obj={obj} key={obj.key} />)
  const toggleFavorites = () => setIsFavorite(!isFavorite)

  return (
    <Container>
      <Top>
        <Text>Tus registros</Text>
        <SVGContainer onClick={toggleFavorites}>
          <StarSVG isFavorite={isFavorite} />
        </SVGContainer>
      </Top>
      <Bottom registerExists={registersExists ? 'true' : 'false'}>
        {!userData && <RegistersLoader />}
        {registersExists ? mapUserData() : <NoRegisters />}
      </Bottom>
    </Container>
  );
}
 
export default Registers;
