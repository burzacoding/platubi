import { useState } from "react";
import { useDashboard } from "../../Contexts/DashboardContext";
import { Container, Top, Bottom, Text, SVGContainer, AddRegisterButton, TopText } from '../../elements/Dashboard/Registers'
import { useWindowSize } from "../../Hooks/useWindowSize";
import StarSVG from "../atoms/SVG/StarSVG";
import NoRegisters from "../molecules/NoRegisters";
import RegisterField from "../molecules/RegisterField";
import RegistersLoader from "../molecules/RegistersLoader";

const Registers: React.FC = () => {

  const { userData } = useDashboard()
  const [isFavorite, setIsFavorite] = useState(false)
  const registersExists = userData?.registers?.length !== 0
  const {width, height} = useWindowSize()

  const mapUserData = () =>  {
    const pureRegisters = userData?.registers?.map((obj) => <RegisterField obj={obj} key={obj.key} />)
    if (userData) {
      // const registers = userData.registers
      const registersLength = userData.registers?.length || 0
      if (width < 768) {
        if (registersLength >= 5) {
          return pureRegisters
        }
        const EmptysArr: JSX.Element[] = []
        const JSXArr = pureRegisters
        const remainingSpaces = 5 - registersLength
        for (let i = 0; i < remainingSpaces; i++) {
          EmptysArr.push(<h1>Vacio</h1>)
        }
        return JSXArr?.concat(EmptysArr)
      }
      if (width >= 768) {
        //SEGUIR ACA
        //SEGUIR ACA
        //SEGUIR ACA
        //SEGUIR ACA
        //SEGUIR ACA
        const numberOfEmptys = Math.floor((height - 236 - 236 - 24 - 24 - 38 - 75) / 44)
        //SEGUIR ACA
        //SEGUIR ACA
        //SEGUIR ACA
        //SEGUIR ACA
        //SEGUIR ACA
        //SEGUIR ACA
      }
    }
    return pureRegisters
  }
  const toggleFavorites = () => setIsFavorite(!isFavorite)
  

  return (
    <Container>
      <Top>
        <TopText>
          <Text>Tus registros</Text>
          <SVGContainer onClick={toggleFavorites}>
            <StarSVG isFavorite={isFavorite} />
          </SVGContainer>
        </TopText>
        {userData && <AddRegisterButton whileTap={{ scale: 0.95 }} inRegisters="false">Añadir registro</AddRegisterButton>}
      </Top>
      {userData && <AddRegisterButton whileTap={{ scale: 0.95 }} inRegisters="true" >Añadir registro</AddRegisterButton>}
      <Bottom registerExists={registersExists ? 'true' : 'false'}>
        {!userData && <RegistersLoader />}
        {registersExists ? mapUserData() : <NoRegisters />}
      </Bottom>
    </Container>
  );
}
 
export default Registers;
