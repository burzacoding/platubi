import styled from "styled-components";

const Container = styled('div')`
  width: 100%;
  height: 100%;
`

const OpRemove: React.FC = () => {
  return (
    <Container>
      <svg width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M56 0H8C3.6 0 0 3.6 0 8V56C0 60.4 3.6 64 8 64H56C60.4 64 64 60.4 64 56V8C64 3.6 60.4 0 56 0ZM52 36H12V28H52V36Z"/>
    </svg>
    </Container>
  );
}
 
export default OpRemove;
