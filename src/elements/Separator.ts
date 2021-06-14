import styled from 'styled-components'

interface SeparadorContProps {
  position: "bottom" | "top"
}


export const SeparadorContainer = styled.div<SeparadorContProps>`
  width: 100%;
  max-height: 90px;
  position: absolute;
  top: ${p => p.position === 'top' ? '0' : 'auto'};
  bottom: ${p => p.position === 'top' ? 'auto' : '0'};
  transform-origin: center;
  transform: ${p => p.position === 'top' ? 'translateY(-50%)' : 'translateY(50%)'};
  z-index: 10;
  @media screen and (min-width: 1366px) {
    transform: translateY(0);
  }

  svg {
    max-height: 100px;
  }
`
 