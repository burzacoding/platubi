import styled from 'styled-components'
import { useDashboard } from '../../../Contexts/DashboardContext'

const Item = styled("div")`
  margin: 0 auto;
  user-select: none;
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 214px;
  height: 42px;
  margin-bottom: 24px;
  cursor: pointer;

  span {
    width: 164px;
    height: 20px;
    text-align: center;
    color: ${props => props.theme.fontContrastOne};

  }
  @media screen and (min-width: 768px) {
    transition: transform 0.25s;
    &:hover {
      transform: scale(1.35)
    }
  }
`
 
const SettingsNavItem: React.FC = () => {

  const { setPage } = useDashboard()
  const func = () => {
    setPage(1)
  }

  return (
      <Item onClick={func}>
        <span>Ajustes</span>
      </Item>
  );
}
 
export default SettingsNavItem;
