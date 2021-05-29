import styled from 'styled-components'

/* ESTILOS DEL CONTENEDOR DE LA LANDING PAGE - RESPONSIVE */

interface NavSpacerProps {
  bottom?: boolean
}

export const LandingPageContainer = styled('div')`
  width: 100vw;
  max-width: 100%;
  overflow: hidden;
  background-color: ${p => p.theme.divBackground};
  transition: background-color 0.25s;
`
export const NavSpacer = styled.div<NavSpacerProps>`
  height: ${p => p.bottom ? '58px' : '52px'};
  min-height: 52px;
  max-height: 90px;
  width: 100vw;
  max-width: 100%;
  
  @media screen and (min-width: 769px) {
    height: 92px;
    display: ${p => p.bottom ? 'none' : 'block'};
  };
  @media screen and (min-width: 1368px) {
    display: none;
  };
`
/* ESTILOS DEL PRIMER ARTÍCULO - PAGINA UNO DE LA LANDING PAGE - RESPONSIVE*/

export const FirstArticle = styled.div`
  width: 100vw;
  max-width: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
`
