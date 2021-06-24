import { useState } from "react";
import { useDashboard } from "../../Contexts/DashboardContext";
import { Container, Top, Bottom, Text, SVGContainer, AddRegisterButton, TopText } from '../../elements/Dashboard/Registers'
import { useWindowSize } from "../../Hooks/useWindowSize";
import { arrayPopulateWithEmpties } from "../../Utils/Utils";
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
    const pureRegisters = userData?.registers?.map((obj) => <RegisterField obj={obj} key={obj.key} />) || []
    if (userData) {
      const registersLength = userData.registers?.length || 0
      if (width < 768 && registersLength < 5) {
        const remainingSPaces = 5 - registersLength
        return arrayPopulateWithEmpties(pureRegisters, remainingSPaces)
      }
      if (width >= 768 && width < 1024) {
        // SE CALCULA EL ESPACIO VERTICAL RESTANTE PARA SUMAR REGISTROS VACÍOS
        const numberOfEmptys = Math.floor((height - 236 - 236 - 24 - 24 - 126 - 32 - 46) / 52) - registersLength
        return arrayPopulateWithEmpties(pureRegisters, numberOfEmptys)
      }
      if (width >= 1024 && width < 1366) {
        const numberOfEmptys = Math.floor((height - 236 - 112 - 24 - 24 - 126 - 32 - 46) / 52) - registersLength
        return arrayPopulateWithEmpties(pureRegisters, numberOfEmptys)
      }
      const numberOfEmptys = Math.floor((height - 274 - 24 - 126 - 36 - 46) / 52) - registersLength
      return arrayPopulateWithEmpties(pureRegisters, numberOfEmptys)
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
