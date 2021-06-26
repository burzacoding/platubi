import styled from "styled-components";

const OpAddContainer = styled('div')`
  width: 100%;
  height: 100%;
`

const OpAdd: React.FC= () => {
  return (
    <OpAddContainer>
      <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M56 0H8C3.6 0 0 3.6 0 8V56C0 60.4 3.6 64 8 64H56C60.4 64 64 60.4 64 56V8C64 3.6 60.4 0 56 0ZM52 36H36V52H28V36H12V28H28V12H36V28H52V36Z"/>
      </svg>
    </OpAddContainer>
  );
}
 
export default OpAdd;
