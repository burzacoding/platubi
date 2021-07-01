import { useState } from "react";
import { registerSchemaTypesWithId, useDashboard } from "../../Contexts/DashboardContext";
import { useModal } from "../../Contexts/ModalContext";
import { FieldContainer, InnerContainer, SVGContainer, PencilContainer, ButtonsContainer, TextContainer, Text, DateText, CrossContainer } from "../../elements/Dashboard/RegisterField";
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
  const allCapsSymbol = symbol.toUpperCase()
  const [isOpen, setIsOpen] = useState(true)
  const [isFavorite, setIsFavorite] = useState(false)
  const { openModal } = useModal()
  const { userData, setUserData } = useDashboard()
  const toggleOpen = () => {
    setIsOpen(!isOpen)
    const index = userData!.registers!.indexOf(obj)
    const stagedRegisters = [...userData!.registers!]
    stagedRegisters[index] = {
      ...stagedRegisters[index],
      visible: !isOpen
    }
    setUserData(prev => ({
      ...prev,
      registers: stagedRegisters
    }))
  }
  const toggleFavorite = () => {
    setIsFavorite(prev => !prev)
    const index = userData!.registers!.indexOf(obj)
    const stagedRegisters = [...userData!.registers!]
    stagedRegisters[index] = {
      ...stagedRegisters[index],
      favorite: !isFavorite
    }
    setUserData(prev => ({
      ...prev,
      registers: stagedRegisters
    }))
  }
  return (
    <FieldContainer>
      <InnerContainer>
        <SVGContainer>
          <OperationSymbol operation={operation} />
        </SVGContainer>
        <TextContainer>
          <Text>{allCapsSymbol}</Text>
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
          <CrossContainer customPadding={4} onClick={() => openModal('delete', obj.key)}>
            <CrossSVG />
          </CrossContainer>
        </ButtonsContainer>
      </InnerContainer>
    </FieldContainer>
  );
}
 
export default RegisterField;
