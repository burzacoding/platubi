import { useState } from "react";
import { registerSchemaTypesWithId } from "../../Contexts/DashboardContext";
import { FieldContainer, InnerContainer, SVGContainer, PencilContainer, ButtonsContainer, TextContainer, Text, CrossContainer } from "../../elements/Dashboard/RegisterField";
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
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
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
          <Text>{createdAt}</Text>
        </TextContainer>
        <ButtonsContainer>
          <SVGContainer customPadding={1} onMouseDown={toggleFavorite}>
            <StarSVG isFavorite={isFavorite}  />
          </SVGContainer>
          <SVGContainer customPadding={1} onMouseDown={toggleOpen}>
            <EyeSVG isOpen={isOpen} />
          </SVGContainer>
          <PencilContainer>
            <EditPencil />
          </PencilContainer>
          <CrossContainer customPadding={6}>
            <CrossSVG />
          </CrossContainer>
        </ButtonsContainer>
      </InnerContainer>
    </FieldContainer>
  );
}
 
export default RegisterField;
