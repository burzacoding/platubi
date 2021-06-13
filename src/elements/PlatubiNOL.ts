import styled from 'styled-components'

interface SVGContainerProps {
  mobile?: boolean
}

export const SvgContainer = styled.div<SVGContainerProps>`
  width: 188px;
  height: 32px;
  margin: auto;
  margin-bottom: ${p => p.mobile ? '20px' : '32px'};
  display: ${p => p.mobile ? 'block' : 'none'};

  svg {
    display: block;
    margin: auto;
  }

  @media screen and (min-width: 668px) { 
    display: ${p => p.mobile ? 'none' : 'block'} 
  };
  @media screen and (min-width: 1368px) {
    display: none;
  }
`
