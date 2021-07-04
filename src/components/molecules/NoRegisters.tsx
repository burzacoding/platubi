import styled from 'styled-components'
import { useModal } from '../../Contexts/ModalContext'

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
const Button = styled.div`
  cursor: pointer;
  user-select: none;
  height: 38px;
  width: 100%;
  max-width: 360px;
  margin-top: 24px;
  border-radius: 8px;
  border: 2px solid #3480C1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3480C1;
  
`

export interface NoRegistersProps {
  
}
 
const NoRegisters: React.FC<NoRegistersProps> = () => {

  const { openModal } = useModal()

  return (
    <Container>
      <span>No tenés ningún registro</span>
      <Button onClick={() => openModal('add')}>Añadir registro</Button>
    </Container>
  );
}
 
export default NoRegisters;
