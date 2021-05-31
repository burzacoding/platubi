import styled from 'styled-components'

interface SvgElementProps {
  colorObj: {
    dark: string,
    light: string
  }
}

const SvgElement = styled.svg<SvgElementProps>`
  fill: ${p => p.theme.theme === 'dark' ? p.colorObj.dark : p.colorObj.light};
`

const BackArrow: React.FC<SvgElementProps> = ({colorObj}) => {
  return (
    <SvgElement colorObj={colorObj} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2125 4.7125L20 2.5L7.5 15L20 27.5L22.2125 25.2875L11.925 15L22.2125 4.7125Z" />
    </SvgElement>
  );
}
 
export default BackArrow;
