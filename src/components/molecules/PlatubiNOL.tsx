// import { motion } from 'framer-motion'
import styled from 'styled-components'

export interface PlatubiNOLProps {
  mobile?: boolean,
  keyID: string
}

interface SVGContainerProps {
  mobile?: boolean
}

const SVGContainer = styled.div<SVGContainerProps>`
  width: 188px;
  height: 32px;
  margin: auto;
  margin-bottom: ${p => p.mobile ? '20px' : '32px'};
  display: ${p => p.mobile ? 'block' : 'none'};

  svg {
    display: block;
    margin: auto;
  }

  @media screen and (min-width: 668px) { 
    display: ${p => p.mobile ? 'none' : 'block'} 
  };
  @media screen and (min-width: 1368px) {
    display: none;
  }
`

const PlatubiNOL: React.FC<PlatubiNOLProps> = ({mobile, keyID}) => {
  return (
    <SVGContainer key={keyID} mobile={mobile ? true : false} >
      <svg width="178" height="27" viewBox="0 0 178 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Platubi" d="M0.734469 26V0.943999H11.2105C12.9625 0.943999 14.4745 1.268 15.7465 1.916C17.2105 2.66 18.3745 3.728 19.2385 5.12C20.1025 6.488 20.5345 8 20.5345 9.656C20.5345 11.312 20.1025 12.836 19.2385 14.228C18.3985 15.62 17.2465 16.688 15.7825 17.432C14.5345 18.08 13.0105 18.404 11.2105 18.404H7.28647V26H0.734469ZM27.9589 26V0.943999H29.2909V24.668H46.7509V26H27.9589ZM61.6633 0.943999H63.0673L73.3633 26H71.9233L68.5393 17.72H56.1913L52.7713 26H51.3673L61.6633 0.943999ZM56.7313 16.424H67.9993L62.3473 2.672L56.7313 16.424ZM99.1118 0.943999V2.276H89.6438V26H88.3478V2.276H78.8798V0.943999H99.1118ZM105.528 0.943999H106.86V16.424C106.86 18.008 107.256 19.472 108.048 20.816C108.84 22.16 109.908 23.228 111.252 24.02C112.596 24.812 114.06 25.208 115.644 25.208C117.228 25.208 118.692 24.812 120.036 24.02C121.38 23.228 122.448 22.16 123.24 20.816C124.032 19.472 124.428 18.008 124.428 16.424V0.943999H125.76V16.424C125.76 18.248 125.304 19.94 124.392 21.5C123.48 23.036 122.244 24.26 120.684 25.172C119.148 26.084 117.468 26.54 115.644 26.54C113.82 26.54 112.128 26.084 110.568 25.172C109.032 24.26 107.808 23.036 106.896 21.5C105.984 19.94 105.528 18.248 105.528 16.424V0.943999ZM147.333 1.664C148.461 2.24 149.325 3.032 149.925 4.04C150.549 5.048 150.861 6.176 150.861 7.424C150.861 8.6 150.549 9.692 149.925 10.7C149.325 11.684 148.485 12.464 147.405 13.04C148.677 13.472 149.733 14.264 150.573 15.416C151.413 16.568 151.833 17.84 151.833 19.232C151.833 20.48 151.521 21.632 150.897 22.688C150.273 23.744 149.445 24.56 148.413 25.136C147.885 25.424 147.297 25.64 146.649 25.784C146.001 25.928 145.137 26 144.057 26H133.545V0.943999H143.553C145.137 0.943999 146.397 1.184 147.333 1.664ZM146.757 11.996C147.621 11.564 148.305 10.94 148.809 10.124C149.313 9.308 149.565 8.408 149.565 7.424C149.565 6.32 149.277 5.36 148.701 4.544C148.125 3.704 147.393 3.092 146.505 2.708C145.833 2.42 144.705 2.276 143.121 2.276H134.841V12.572H143.769C145.017 12.572 146.013 12.38 146.757 11.996ZM147.621 24.128C148.509 23.672 149.217 23.012 149.745 22.148C150.273 21.26 150.537 20.3 150.537 19.268C150.537 18.188 150.261 17.216 149.709 16.352C149.157 15.464 148.413 14.804 147.477 14.372C146.757 14.036 145.785 13.868 144.561 13.868H134.841V24.704H144.093C145.005 24.704 145.725 24.656 146.253 24.56C146.781 24.464 147.237 24.32 147.621 24.128ZM177.077 0.943999V2.276H169.589V24.668H177.077V26H160.841V24.668H168.293V2.276H160.841V0.943999H177.077Z"
        fill={`url(#${keyID}platubinol_linear)`}
        
        />
        <defs>
          <linearGradient id={`${keyID}platubinol_linear`} x1="-11.8116" y1="11.0588" x2="189.812" y2="11.0588" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3480C1"/>
            <stop offset="1" stopColor="#0DCA4F"/>
          </linearGradient>
        </defs>
      </svg>
    </SVGContainer>
  );
}
 
export default PlatubiNOL;
