import { ButtonContainer, GhostContainer } from "../../elements/ButtonAction";
export interface ButtonActionProps {
  to: string,
  ghost?: boolean,
  text?: string
}
 
const ButtonAction: React.FC<ButtonActionProps> = ({to, ghost, text = 'Texto default'}) => {
  return (
    <ButtonContainer to={to} ghost={ghost ? "true" : undefined} >
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
 
export default ButtonAction;
