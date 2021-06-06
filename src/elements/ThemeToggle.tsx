import styled from 'styled-components'

interface ThemeInterface {
  mobile?: boolean
}

export const ThemeImg = styled.div<ThemeInterface>`
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  width: ${props => props.mobile ? '214px' : '32px'};
  height: ${props => props.mobile ? '42px' : '32px'};
  min-width: ${props => props.mobile ? '42px' : '32px'};
  margin: ${props => props.mobile ? '0 4px' : '0'};
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  svg {
    position: absolute;
    left: ${p => p.mobile ? '5px' : '0'};
    transform: ${p => p.mobile ? 'scale(1.2)' : 'scale(1)'};
  }
  span {
    width: 164px;
    height: 20px;
    user-select: none;
    text-align: center;
  }
`

export const ThemeButton = styled.div<ThemeInterface>`
  width: 214px;
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  span {
    width: 164px;
    height: 20px;
    text-align: center;
    color: ${props => props.theme.fontContrastOne};
    align-self: center;
    user-select: none;
  }
`
export const SVGContainer = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
`
