import styled from 'styled-components'

/* ESTILOS DEL CONTENEDOR DE LA LANDING PAGE - RESPONSIVE */

export const LandingPageContainer = styled('div')`
  width: 100vw;
  max-width: 100%;
  background-color: ${p => p.theme.divBackground};
  transition: background-color 0.25s;
`
export const NavSpacer = styled.div`
  height: 10vh;
  min-height: 52px;
  max-height: 86px;
  width: 100vw;
  max-width: 100%;
`
/* ESTILOS DEL PRIMER ARTÍCULO - PAGINA UNO DE LA LANDING PAGE - RESPONSIVE*/

export const FirstArticle = styled.div`
  width: 100vw;
  max-width: 100%;
  position: relative;

  display: flex;
`
