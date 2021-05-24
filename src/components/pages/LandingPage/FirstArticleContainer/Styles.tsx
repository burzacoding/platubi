import styled from 'styled-components'
import { motion } from 'framer-motion'

/* ESTILOS DEL CONTENIDO DEL PRIMER ARTÍCULO - PAGINA UNO DE LA LANDING PAGE - RESPONSIVE */

export const MainContent = styled.div`
  background-color: ${p => p.theme.divBackground};
  display: flex;
  transition: background-color 0.25s;
  padding-bottom: 256px;
  margin: auto;
  min-width: 320px;
  width: 100%;
  @media screen and (min-width: 668px) {
    margin: 0;
    padding: 72px 0;
  }
`
export const InnerContainer = styled.div`
  margin: 0 auto;
  margin-top: 36px;
  @media screen and (min-width: 668px) {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
  }
`
export const Title = styled(motion.h1)`
font-weight: 500;
font-size: 20px;
line-height: 140%;

min-height: 56px;
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

@media screen and (min-width: 768px) {
  font-size: 23px;
}
@media screen and (min-width: 960px) {
  font-size: 26px;
}
`
export const BodyText = styled(motion.p)`
  margin-top: 16px;
  color: ${p => p.theme.fontContrastTwo};
  font-weight: 300;
  font-size: 14px;
  line-height: 140%;
  text-align: center;
  min-width: 296px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 302px;

  margin-bottom: 32px;
  @media screen and (min-width: 668px) {
    width: 100%;
    margin-bottom: 0;
  }
`

export const ActionContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
    width: 100%;
`

export const ButtonsContainer = styled.div`
  margin: auto;

`
