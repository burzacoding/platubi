import styled from 'styled-components'
import { Link } from 'react-router-dom'
import React from 'react'

export interface MobileNavItemProps {
  img?: string,
  text: string,
  alt?: string,
  toUrl: string,
  func: () => void,
  logged?: boolean,
  svg?: React.ReactNode
}

const Item = styled(Link)`
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }

  user-select: none;
  
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

const ItemLogged = styled(Item)`
  justify-content: center;
  transition: transform 0.25s;
  &:hover {
    transform: scale(1.35)
  }
  span {
    text-align: center;
  }

`
 
const MobileNavItem: React.FC<MobileNavItemProps> = ({img, text, alt, toUrl, func, svg, logged}) => {
  return (
    <>{logged ? (
      <ItemLogged to={toUrl} onClick={func}>
        <span>{text}</span>
      </ItemLogged>

    ) : (
      <Item to={toUrl} onClick={func}>
        {img && alt && <img src={img} alt={`img-${alt}`} />}
        <span>{text}</span>
      </Item>
    )}
    </>
  );
}
 
export default MobileNavItem;
