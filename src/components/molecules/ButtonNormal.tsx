import styled from 'styled-components'

export interface ButtonNormalProps {
  ghost?: boolean,
  text?: string,
  onClick?: () => void;
}

interface ButtonContainerProps {
  ghost?: boolean | string
}

interface GhostContainerProps {
  colorText?: boolean | string
}

const ButtonContainer = styled.div<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => p.theme.colorBackground};
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  width: 100%;
  height: 42px;
  border-radius: 0.5em;

  text-decoration: none;
  text-align: center;
  span {
    display: block;
    line-height: 140%;
    color: #f0f0f0;
    font-size: 14px;
    @media screen and (min-width: 1025px) {
      font-size: 1em;
    }
  }
`
const GhostContainer = styled.div<GhostContainerProps>`
  background-color: ${p => p.theme.divBackground};
  transition: background-color 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc(100% - 4px);
  height: 38px;
  border-radius: 0.375em;
  margin: auto;
  padding: 0.5em 0;

  span {
    background-image: ${p => p.theme.colorBackground};
    background-clip: text;
    font-weight: 500;
    -webkit-background-clip: text;
    color: transparent;
  };
`
 
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
