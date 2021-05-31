import styled from 'styled-components'
import { motion } from 'framer-motion'

/* ESTILOS DEL CONTENIDO DEL PRIMER ARTÍCULO - PAGINA UNO DE LA LANDING PAGE - RESPONSIVE */

export const MainContent = styled.div`
  background-color: ${p => p.theme.divBackground};
  transition: background-color 0.25s;
  display: flex;
  width: 100%;
  margin: 30px auto 36px auto;
  min-width: 320px;
  max-width: 1440px;
  @media screen and (min-width: 668px) {
    margin: 0;
    padding: 72px 48px;
  }
  @media screen and (min-width: 1025px) {
    padding: 108px 96px;
  }
  @media screen and (min-width: 1368px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    padding: 164px 0 156px 128px;
  }
`
export const InnerContainer = styled(motion.div)`
  margin: 0 auto;
  margin-top: 36px;
  @media screen and (min-width: 668px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
  @media screen and (min-width: 1025px) {
    
  }
  @media screen and (min-width: 1368px) {
    width: 658px;
    flex-direction: column;
  }
`
export const Title = styled.h1`
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
@media screen and (min-width: 1368px) {
  font-size: 38px;
  text-align: left;
  margin-bottom: 32px;
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
  @media screen and (min-width: 1368px) {
    font-size: 22px;
    text-align: left;
    margin-bottom: 56px;
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
  @media screen and (min-width: 1368px) {
    display: flex;
  }
`
