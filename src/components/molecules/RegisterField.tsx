import { useState } from "react";
import { registerSchemaTypesWithId } from "../../contexts/DashboardContext";
import { FieldContainer, InnerContainer, SVGContainer, PencilContainer, ButtonsContainer, TextContainer, Text } from "../../elements/Dashboard/RegisterField";
import EditPencil from "../atoms/SVG/EditPencilSVG";
import EyeSVG from "../atoms/SVG/EyeSVG";
import OperationSymbol from "../atoms/SVG/OperationSymbol";
import StarSVG from "../atoms/SVG/StarSVG";

export interface RegisterFieldProps {
  obj: registerSchemaTypesWithId
}
 
const RegisterField: React.FC<RegisterFieldProps> = ({obj}) => {
  const { operation, symbol, value, createdAt} = obj
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
          <Text>{symbol}</Text>
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
        </ButtonsContainer>
      </InnerContainer>
    </FieldContainer>
  );
}
 
export default RegisterField;
