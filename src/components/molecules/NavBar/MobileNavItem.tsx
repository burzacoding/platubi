import styled from 'styled-components'
import { Link } from 'react-router-dom'

export interface MobileNavItemProps {
  img: string,
  text: string,
  alt: string,
  toUrl: string,
  func: () => void,
  mobile?: boolean
}

const Item = styled(Link)`
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  
  display: flex;
  align-items: center;
  width: 214px;
  height: 42px;
  margin-bottom: 24px;

  img {
    width: 42px;
  }

  span {
    width: 164px;
    height: 20px;
    text-align: center;
    color: ${props => props.theme.fontContrastOne};
  }
`
 
const MobileNavItem: React.FC<MobileNavItemProps> = ({img, text, alt, toUrl, func}) => {
  return (
      <Item to={toUrl} onClick={func}>
        <img src={img} alt={`img-${alt}`} />
        <span>{text}</span>
      </Item>
  );
}
 
export default MobileNavItem;
