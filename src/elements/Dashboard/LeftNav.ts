import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  width: 100%;
  height: 100%;
  grid-area: ln;
  background-color: ${p => p.theme.divDarkerBackground};
  display: none;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 52px;
  padding-top: 146px;
  @media screen and (min-width: 1366px) {
    display: flex;
  }
`

const SelectSheetButton = styled.div`
  width: 92px;
  height: 76px;
  border-radius: 8px 0 0 8px;
  padding: 20px;
  margin-left: auto;
  cursor: pointer;
`
const SelectSheet = styled(SelectSheetButton)`
  background-color: ${p => p.theme.divBackground};
`


const SVGContainer = styled(motion.div)`
  position: absolute;
  top: 52px;
  left: 34px;
  width: 38px;
  height: 38px;
`


export { Container, SelectSheet, SelectSheetButton, SVGContainer }
