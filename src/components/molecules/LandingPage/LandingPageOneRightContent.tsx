import { useEffect, useRef } from 'react'
import blobD from '../../../res/Landing/blob-dark-desktop.png'
import blobW from '../../../res/Landing/blob-light-desktop.png'
import '../../../css/LandingPage/LandingPageRightContent.css'

export interface LandingPageOneRightContentProps {
  theme: 'dark' | 'light'
}
 
const LandingPageOneRightContent: React.FC<LandingPageOneRightContentProps> = ({theme}) => {
  const counter = useRef(0)
  const rightCont = useRef<HTMLDivElement>(null)
  const darkBlob = useRef<HTMLImageElement>(null)
  const lightBlob = useRef<HTMLImageElement>(null)

  

  useEffect(() => {
    if (counter.current === 1) {
      darkBlob.current?.classList.toggle('hidden')
      lightBlob.current?.classList.toggle('hidden')
    }
    if (counter.current === 0) {
      rightCont.current?.classList.add('rightContShow')
      counter.current++
    }
  }, [theme])


  return (
    <div className="right-deco-cont center" id="rightCont" ref={rightCont}>
      <img className='blob' src={blobD} alt="blobD" id='blobD' ref={darkBlob} />
      <img className='blob hidden' src={blobW} alt="blobW" id="blobW" ref={lightBlob} />
    </div>
  );
}
 
export default LandingPageOneRightContent;
