import styled from 'styled-components'

interface ContainerProps {
  bottom?: boolean
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: ${p => p.bottom ? '116px' : '88px'};
  clip-path: ${p => p.bottom ? "url('#bottompath')" : "url('#toppath')"};

  @media screen and (min-width: 668px) {
  height: ${p => p.bottom ? '120px' : '140px'};
  }
  @media screen and (min-width: 1368px) {
    display: none;
  }

  svg clipPath {
    transform: ${p => p.bottom ? 'scale(0.0015, 0.00825)' : 'scale(0.0015, 0.00715)'};
    -moz-transform: ${p => p.bottom ? 'scale(0.0005, 0.004)' : 'scale(0.000485,0.00345)'};
    @media screen and (min-width: 668px) {
      transform: ${p => p.bottom ? 'scale(0.0015, 0.00825)' : 'scale(0.0015, 0.00725)'};
      -moz-transform: ${p => p.bottom ? 'scale(0.00093, 0.004)' : 'scale(0.0015, 0.00725)'};
    }
  }
`
