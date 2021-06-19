import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React from 'react'

export interface MobileNavItemProps {
  img?: string,
  text: string,
  alt?: string,
  toUrl: string,
  func: () => void,
}

const Item = styled(Link)`
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  text-decoration: none;
  margin: 0 auto;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }

  user-select: none;
  
  display: flex;
  align-items: center;
  justify-content: center;
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
  @media screen and (min-width: 768px) {
    transition: transform 0.25s;
    &:hover {
      transform: scale(1.35)
    }
  }
`
 
const MobileNavItem: React.FC<MobileNavItemProps> = ({img, text, alt, toUrl, func}) => {
  return (
      <Item to={toUrl} onClick={func}>
        {img && alt && <img src={img} alt={`img-${alt}`} />}
        <span>{text}</span>
      </Item>
  );
}
 
export default MobileNavItem;
