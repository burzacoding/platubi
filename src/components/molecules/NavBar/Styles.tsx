import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

interface isLogged {
  logged?: string
}

export const NavBarDesktopContainer = styled.div`
  width: 100vw;
  max-width: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  z-index: 20;

  @media screen and (max-width: 768px) {
    display: none
  };
`

export const NavBarDesktop = styled.div`
  z-index: 10;
  background-color: ${p => p.theme.divBackground};
  display: flex;
  transition: background-color 0.25s;
`

export const NavBarDesktopContent = styled.div<isLogged>`
  width: 100%;
  max-width: ${p => p.logged ? '100%' : '1440px'};
  padding-left: 128px;
  padding-right: 48px;
  height: 72px;
  margin: 0 auto;
  z-index: 0;

  display: flex;
  align-items: center;
  justify-content: start;
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    height: 90px;
  }
`

export const NavBarContentLogged = styled(NavBarDesktopContent)`
  max-width: 100%;
  justify-content: flex-end;

`

export const LogoNav = styled.div<isLogged>`
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  justify-self: flex-start;
  user-select: none;
  margin-right: ${p => p.logged ? 'auto' : '0'};
  img { 
    height: 46px;
  @media screen and (min-width: 1024px) {
    width: 178px;
    height: 52px;
  }
  }
`


export const OptionsNav = styled.div`
  user-select: none;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`
export const OptionNav = styled(Link)`
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }

  font-size: 18px;
  line-height: 22px;
  color: ${props => props.theme.fontContrastOne};
  margin-right: 46px;
  &:nth-last-child(1){
    margin-right: 0;
  }
`
export const ButtonsDesktopNav = styled.div<isLogged>`
  user-select: none;
  margin-right: ${p => p.logged ? '36px' : '0'};
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-left: auto;
    margin-right: 36px;
  }
`

interface buttonColor {
  blue?: string
}
export const ButtonDesktopNav = styled(Link)<buttonColor>`
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:nth-last-child(1){
    margin-right: 0;
  }

  margin-right: 36px;
  color: ${props => props.blue ? '#1A82DB' : '#03A63C'};

  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
`






















export const NavBarMobileContainer = styled.div`
  pointer-events: none;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  max-height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 20;
  overflow: hidden;

  @media screen and (min-width: 769px) {
    display: none
  }
`
export const NavBarMobileTop = styled.div`
`
export const ContentTop = styled.div`
pointer-events: auto;
  height: 52px;
  width: 100vw;
  max-width: 100%;
  background-color: ${props => props.theme.divBackground};
  transition: background-color 0.25s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  padding: 10px;
  z-index: 1;
  a {
    user-select: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`
export const ContentBottom = styled(ContentTop)`
  height: 58px;
  padding: 0 26px;
`
export const NavBarMobileBottom = styled.div`
`
export const HorizontalBar = styled.div`
  width: 100%;
  height: 2px;

  position: relative;

  z-index: 0;

  background-image: ${ props => props.theme.horizontalBarBG};
  box-shadow: ${props => props.theme.horizontalBarShadow};

  @media screen and (min-width: 769px) {
    height: 3px;
  }
  @media screen and (min-width: 1025px) {
    height: ${props => props.theme.theme === "dark" ? '4px' : '6px'};
  };
`
interface NavMobileProps {
  current?: boolean
}

export const OptionNavMobile = styled(Link)<NavMobileProps>`
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.fontContrastOne};
  background-color: ${p => p.current ? p.theme.divDarkerBackground : 'transparent'};
  transition: background-color 0.25s;
  font-size: 10px;
  height: 100%;
  width: 128px;

  img {
    width: 28px;
    margin: auto;
    margin-bottom: 4px;
  }
  span {
    width: 100%;
    height: 14px;
    margin-bottom: 4px;
    text-align: center;
    font-weight: 500;
  }
`
export const OptionsContainer = styled.div`
  display: flex;

`


interface mobileNav {
  desktop?: boolean,
  logged?: boolean
}
export const MenuMobileNav = styled(motion.div)<mobileNav>`
  pointer-events: auto;
  position: absolute;
  height: 100vh;
  width: 120vw;
  top: 54px;
  left: -10%;
  z-index: -4;

  background-color: ${props => props.theme.divDarkerBackground};
  color: ${props => props.theme.fontContrastOne};
  transition: background-color 0.25s;

  display: ${props => props.desktop ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
  padding: 48px 72px;

  @media screen and (min-width: 361px) {
    padding-top: 128px;
  }
  @media screen and (min-width: 768px) {
    display: ${props => props.desktop ? 'flex' : 'none'};
    width: 420px;
    max-width: 100%;
    left: auto;
    right: 0;
    top: 0;
  }
  @media screen and (min-width: 1024px) {
    display: ${props => {
      if (props.desktop && props.logged) return 'flex'
      if (props.desktop) return 'none'
      return 'none'
    }};
  }
`
export const SwitchContainerStyled = styled.div`
  svg {
    @media screen and (min-height: 570px) {
      transform: scale(1.1);
    }
  }
`
