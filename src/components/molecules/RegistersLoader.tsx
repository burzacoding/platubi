import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export interface RegistersLoaderProps {
  
}
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${p => p.theme.divDarkerBackground};
transition: background-color 0.25s;
border-radius: 8px;
padding: 8px;
text-align: center;
span {
  font-size: 20px;
  font-family: 'Mandali',sans-serif;
}
`
 
const RegistersLoader: React.FC<RegistersLoaderProps> = () => {
  return (
    <Container>
      <h1>CARGANDO...</h1>
      <Loader type="TailSpin"  />
    </Container>
  );
}
 
export default RegistersLoader;
