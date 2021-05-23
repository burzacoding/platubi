import styled from 'styled-components'
import { motion } from 'framer-motion'

/* ESTILOS DEL CONTENIDO DEL PRIMER ARTÍCULO - PAGINA UNO DE LA LANDING PAGE - RESPONSIVE */

export const MainContent = styled.div`
  background-color: ${p => p.theme.divBackground};
  display: flex;
  transition: background-color 0.25s;
  padding-bottom: 256px;
`
export const InnerContainer = styled.div`
  padding: 0 28px;
  margin-top: 36px;
`
export const Title = styled(motion.h1)`
font-weight: 500;
font-size: 20px;
line-height: 140%;

min-width: 304px;
min-height: 54px;
text-align: center;

background-image: linear-gradient(to right,#1269B4, #3BBC76, #1269B4, #3BBC76);
background-size: 400% 100%;
background-clip: text;
-webkit-background-clip: text;
color: transparent;
-webkit-animation: titleGradientAnimation 10s linear infinite normal;
-moz-animation: titleGradientAnimation 10s linear infinite normal;
animation: titleGradientAnimation 10s linear infinite normal;
@-webkit-keyframes titleGradientAnimation {
0%{background-position:0% 0%};
100%{background-position:100% 0%};
};
@-moz-keyframes titleGradientAnimation {
0%{background-position:0% 50%};
100%{background-position:100% 0%};
};
@keyframes titleGradientAnimation {
0%{background-position:0% 50%};
100%{background-position:100% 0%};
};
`
export const BodyText = styled(motion.p)`
  margin-top: 16px;
  color: ${p => p.theme.fontContrastTwo};
  font-weight: 300;
  font-size: 13px;
  line-height: 140%;
  text-align: center;
`
export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 32px;
  @media screen and (min-width: 668px) {
    margin-bottom: 0;
  }
`

export const ActionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ButtonsContainer = styled.div`
  margin: auto;

`
