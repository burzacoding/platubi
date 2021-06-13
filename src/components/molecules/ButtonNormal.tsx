import { ButtonContainer, GhostContainer } from "../../elements/ButtonNormal";

export interface ButtonNormalProps {
  ghost?: boolean,
  text?: string,
  onClick?: () => void;
}

 
const ButtonNormal: React.FC<ButtonNormalProps> = ({ghost, text = 'Texto default', onClick} ) => {
  return (
    <ButtonContainer ghost={ghost ? "true" : undefined} onClick={onClick} >
      {
        ghost
        ?
        (
          <GhostContainer>
            <span>{text}</span>
          </GhostContainer>
        )
        :
        (
          <span>{text}</span>
        )
      }
    </ButtonContainer>
  );
}
 
export default ButtonNormal;
