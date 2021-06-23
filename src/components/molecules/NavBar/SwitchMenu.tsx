import { motion } from 'framer-motion'
import styled from 'styled-components'
import { forwardRef } from 'react'

export interface SwitchMenuProps {
  open: boolean,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>,
  logged?: boolean
}
const variantsButton = {
  open: { x: -14 },
  closed: { x: 0 },
}

interface MenuProps {
  logged?: boolean
}

const MenuSvg = styled.svg<MenuProps>`
  @media screen and (min-width: 768px) and (max-width:1024px) {
  transform: scale(1.1625);
  margin-left: 36px;
  }
  @media screen and (min-width: 1025px) {
    display: ${p => p.logged ? 'block' : 'none'};
    margin-left: ${p => p.logged ? '36px' : '0'};
    transform: scale(1.15)
  }
`

const SwitchMenu = forwardRef<SVGSVGElement, SwitchMenuProps>(({open, setToggle, logged}, ref) => {
  const toggleMenuFunc = () => {
    console.log('toggle');
    
    setToggle(t => !t)
  }
  return (
    <div className="">
        <MenuSvg logged={logged} width="32" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleMenuFunc} id="mysvg" ref={ref}>
        <g id="hamb">
          <path id="hambBottom" fillRule="evenodd" clipRule="evenodd" d="M0 22.1538C0 23.1734 0.752162 24 1.68 24H26.32C27.2478 24 28 23.1734 28 22.1538C28 21.1342 27.2478 20.3077 26.32 20.3077H1.68C0.752162 20.3077 0 21.1342 0 22.1538ZM0 12C0 13.0196 0.752162 13.8462 1.68 13.8462H26.32C27.2478 13.8462 28 13.0196 28 12C28 10.9804 27.2478 10.1538 26.32 10.1538H1.68C0.752162 10.1538 0 10.9804 0 12Z" fill="url(#paint0_linear)"/>
          <motion.path id="hambTop" d="M13.8599 1.84623C13.8599 2.86583 14.612 3.69238 15.5399 3.69238H26.3199C27.2477 3.69238 27.9999 2.86583 27.9999 1.84623C27.9999 0.826624 27.2477 7.43866e-05 26.3199 7.43866e-05H15.5399C14.612 7.43866e-05 13.8599 0.826624 13.8599 1.84623Z" fill="url(#paint1_linear)" animate={open ? 'open' : 'closed'} variants={variantsButton}  />
        </g>
        <defs>
          <linearGradient id="paint0_linear" x1="-6.5" y1="30" x2="18.9429" y2="34.8415" gradientUnits="userSpaceOnUse">
            <stop stopColor="#134F82"/>
            <stop offset="1" stopColor="#2BA665"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="-6.50012" y1="30" x2="18.9428" y2="34.8414" gradientUnits="userSpaceOnUse">
            <stop stopColor="#134F82"/>
            <stop offset="1" stopColor="#2BA665"/>
          </linearGradient>
        </defs>
      </MenuSvg>
    </div>
  );
})
 
export default SwitchMenu;
