import { useState } from "react";
import { useApi } from "../../Contexts/ApiContext";
import { registerSchemaTypesWithId, useDashboard } from "../../Contexts/DashboardContext";
import { useModal } from "../../Contexts/ModalContext";
import { FieldContainer, InnerContainer, SVGContainer, OpContainer, PencilContainer, ButtonsContainer, TextContainer, Text, DateText, NameText, CrossContainer } from "../../elements/Dashboard/RegisterField";
import CrossSVG from "../atoms/SVG/Cross";
import EditPencil from "../atoms/SVG/EditPencilSVG";
import EyeSVG from "../atoms/SVG/EyeSVG";
import OperationSymbol from "../atoms/SVG/OperationSymbol";
import StarSVG from "../atoms/SVG/StarSVG";

export interface RegisterFieldProps {
  obj: registerSchemaTypesWithId
}
 
const RegisterField: React.FC<RegisterFieldProps> = ({obj}) => {
  const { operation, symbol, value, createdAt} = obj
  const [isOpen, setIsOpen] = useState(obj.visible)
  const [isFavorite, setIsFavorite] = useState(false)
  const { openModal } = useModal()
  const { userData, setUserData } = useDashboard()
  const staged = userData && userData.registers ? userData.registers : false

  const { cryptoList, currenciesList } = useApi()

  const letterSymbol = () => {
    const symbolIsCrypto = cryptoList.data.filter(el => el.value === symbol)[0]
    if (!symbolIsCrypto) {
      const symbolIsCurrency = currenciesList.data.filter(el => el.symbol === symbol)[0]
      return symbolIsCurrency
    } else {
      return symbolIsCrypto
    }
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    if (staged) {
      const index = staged.indexOf(obj)
      const stagedRegisters = [...staged]
      stagedRegisters[index] = {
        ...stagedRegisters[index],
        visible: !isOpen
      }
      setUserData(prev => ({
        ...prev,
        registers: stagedRegisters
      }))
    }
  }
  const toggleFavorite = () => {
    setIsFavorite(prev => !prev)
    if (staged) {
      const index = staged.indexOf(obj)
      const stagedRegisters = [...staged]
      stagedRegisters[index] = {
        ...stagedRegisters[index],
        favorite: !isFavorite
      }
      setUserData(prev => ({
        ...prev,
        registers: stagedRegisters
      }))
    }
  }
  return (
    <FieldContainer>
      <InnerContainer>
        <OpContainer>
          <OperationSymbol operation={operation} />
        </OpContainer>
        <TextContainer>
          <Text>{letterSymbol().symbol}</Text>
          <NameText>{letterSymbol().name}</NameText>
          <Text>{value}</Text>
          <DateText>{createdAt}</DateText>
        </TextContainer>
        <ButtonsContainer>
          <SVGContainer customPadding={1} onMouseDown={toggleFavorite}>
            <StarSVG isFavorite={isFavorite}  />
          </SVGContainer>
          <SVGContainer customPadding={1} onMouseDown={toggleOpen}>
            <EyeSVG isOpen={isOpen} />
          </SVGContainer>
          <PencilContainer onClick={() => openModal('modify', obj)}>
            <EditPencil />
          </PencilContainer>
          <CrossContainer onClick={() => openModal('delete', obj.key)}>
            <CrossSVG />
          </CrossContainer>
        </ButtonsContainer>
      </InnerContainer>
    </FieldContainer>
  );
}
 
export default RegisterField;
