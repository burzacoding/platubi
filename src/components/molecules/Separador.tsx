import separador from '../../res/Landing/separator.svg'
import '../../css/Separador.css'

export interface SeparadorProps {
  position: "bottom" | "top"
}
 
const Separador: React.FC<SeparadorProps> = ({position}) => {
  let classPosSeparator = "bottom-separator"
  if (position === 'top') {
    classPosSeparator = "top-separator"
  }
  return (
    <div className={`separator ${classPosSeparator}`}>
      <img src={separador} alt=""/>
    </div>
  );
}
 
export default Separador;
