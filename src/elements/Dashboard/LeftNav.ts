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
interface SelectedSheetButtonProps {
  pageNumber: number,
  currentPage: number
 }

const SelectSheetButton = styled.div<SelectedSheetButtonProps>`
  width: 92px;
  height: 76px;
  border-radius: 8px 0 0 8px;
  padding: 20px;
  margin-left: auto;
  cursor: pointer;
  user-select: none;
  background-color: ${p => p.pageNumber === p.currentPage ? p.theme.divBackground : 'transparent'};
  transition: background-color 0.25s;
`

const SVGContainer = styled(motion.div)`
  width: 38px;
  height: 38px;
`


export { Container, SelectSheetButton, SVGContainer }
