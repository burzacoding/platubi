import { useDashboard } from "../../contexts/DashboardContext";
import { Container, Top, Bottom, Text, SVGContainer } from '../../elements/Dashboard/Registers'
import StarSVG from "../atoms/SVG/StarSVG";
import NoRegisters from "../molecules/NoRegisters";
import RegisterField from "../molecules/RegisterField";

const Registers: React.FC = () => {

  const { userData } = useDashboard()
  const registersExists = userData?.registers?.length !== 0

  const mapUserData = () =>  userData?.registers?.map((obj) => <RegisterField obj={obj} key={obj.key} />)

  return (
    <Container>
      <Top>
        <Text>Tus registros</Text>
        <SVGContainer>
          <StarSVG isFavorite={true} />
        </SVGContainer>
      </Top>
      <Bottom registerExists={registersExists ? 'true' : 'false'}>
        {registersExists ? mapUserData() : <NoRegisters />}
      </Bottom>
    </Container>
  );
}
 
export default Registers;
