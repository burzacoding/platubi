import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-height: 304px;
  display: flex;
  flex-direction: column;
  position: relative;
`
const Top = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`
interface BottomProps {
  registerExists: string
}

const Bottom = styled.div<BottomProps>`
  width: 100%;
  height: 100%;
  overflow-y: ${p => p.registerExists === 'true' ? 'scroll' : 'hidden'};
  padding-right: ${p => p.registerExists === 'true' ? '4px' : '0'};


   /* width */
  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${p => p.theme.divDarkerBackground};
    border-radius: 8px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #133c6b;
    border-radius: 6px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #15B74E;
  }

`
const Text = styled.span`
  margin-right: 16px;
`
const SVGContainer = styled.div`
  height: 100%;
  width: 28px;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`

export { Container, Top, Bottom, Text, SVGContainer }
