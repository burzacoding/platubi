import styled from "styled-components";

export interface GearNavProps {
  
}
export interface GearProps {
  current: boolean
  
}

const GearContainer = styled('div')<GearProps>`
height: 100%;
width: 100%;
-webkit-tap-highlight-color: rgba(0,0,0,0);
svg {
  display: flex;
  margin: auto;
  stroke: ${p => p.current ? '#0F954E' : '#0E4777'};
  transition: stroke 0.25s;
}
`
 
const GearNav: React.FC<GearProps> = ({current}) => {
  return (
    <GearContainer current={current}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.8 3.4111C23.8 2.0792 22.7208 1 21.3889 1H18.613C17.2792 1 16.2 2.0792 16.2 3.4111C16.2 4.5093 15.4476 5.4517 14.4235 5.8545C14.262 5.9191 14.1005 5.9875 13.9428 6.0559C12.9339 6.4929 11.735 6.3599 10.956 5.5828C10.5039 5.131 9.89087 4.87721 9.2517 4.87721C8.61253 4.87721 7.99952 5.131 7.5474 5.5828L5.5828 7.5474C5.131 7.99952 4.87721 8.61253 4.87721 9.2517C4.87721 9.89087 5.131 10.5039 5.5828 10.956V10.956C6.3618 11.735 6.4948 12.932 6.054 13.9428C5.98474 14.1019 5.91823 14.2621 5.8545 14.4235C5.4517 15.4476 4.5093 16.2 3.4111 16.2C2.0792 16.2 1 17.2792 1 18.6111V21.3889C1 22.7208 2.0792 23.8 3.4111 23.8C4.5093 23.8 5.4517 24.5524 5.8545 25.5765C5.9191 25.738 5.9875 25.8995 6.054 26.0572C6.4929 27.0661 6.3599 28.265 5.5828 29.044C5.131 29.4961 4.87721 30.1091 4.87721 30.7483C4.87721 31.3875 5.131 32.0005 5.5828 32.4526L7.5474 34.4172C7.99952 34.869 8.61253 35.1228 9.2517 35.1228C9.89087 35.1228 10.5039 34.869 10.956 34.4172C11.735 33.6382 12.932 33.5052 13.9428 33.9441C14.1005 34.0144 14.262 34.0809 14.4235 34.1455C15.4476 34.5483 16.2 35.4907 16.2 36.5889C16.2 37.9208 17.2792 39 18.6111 39H21.3889C22.7208 39 23.8 37.9208 23.8 36.5889C23.8 35.4907 24.5524 34.5483 25.5765 34.1436C25.738 34.0809 25.8995 34.0144 26.0572 33.946C27.0661 33.5052 28.265 33.6401 29.0421 34.4172C29.266 34.6412 29.5318 34.8189 29.8244 34.9401C30.117 35.0613 30.4306 35.1237 30.7473 35.1237C31.0641 35.1237 31.3777 35.0613 31.6703 34.9401C31.9629 34.8189 32.2287 34.6412 32.4526 34.4172L34.4172 32.4526C34.869 32.0005 35.1228 31.3875 35.1228 30.7483C35.1228 30.1091 34.869 29.4961 34.4172 29.044V29.044C33.6382 28.265 33.5052 27.068 33.9441 26.0572C34.0144 25.8995 34.0809 25.738 34.1455 25.5765C34.5483 24.5524 35.4907 23.8 36.5889 23.8C37.9208 23.8 39 22.7208 39 21.3889V18.613C39 17.2811 37.9208 16.2019 36.5889 16.2019C35.4907 16.2019 34.5483 15.4495 34.1436 14.4254C34.0799 14.264 34.0134 14.1037 33.9441 13.9447C33.5071 12.9358 33.6401 11.7369 34.4172 10.9579C34.869 10.5058 35.1228 9.89277 35.1228 9.2536C35.1228 8.61443 34.869 8.00142 34.4172 7.5493L32.4526 5.5847C32.0005 5.1329 31.3875 4.87911 30.7483 4.87911C30.1091 4.87911 29.4961 5.1329 29.044 5.5847V5.5847C28.265 6.3637 27.068 6.4967 26.0572 6.0578C25.8981 5.98789 25.7379 5.92075 25.5765 5.8564C24.5524 5.4517 23.8 4.5093 23.8 3.413V3.4111Z" strokeWidth="2"/>
      <path d="M27.6 20C27.6 22.0156 26.7993 23.9487 25.374 25.374C23.9488 26.7993 22.0157 27.6 20 27.6C17.9844 27.6 16.0513 26.7993 14.626 25.374C13.2007 23.9487 12.4 22.0156 12.4 20C12.4 17.9843 13.2007 16.0512 14.626 14.626C16.0513 13.2007 17.9844 12.4 20 12.4C22.0157 12.4 23.9488 13.2007 25.374 14.626C26.7993 16.0512 27.6 17.9843 27.6 20V20Z" strokeWidth="2"/>
    </svg>
    </GearContainer>
  );
}
 
export default GearNav;