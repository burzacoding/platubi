import { useDashboard } from "../../contexts/DashboardContext";
import RegisterField from "./RegisterField";

const Registers: React.FC = () => {

  const { userData } = useDashboard()

  const mapUserData = () =>  userData?.registers?.map(obj => <RegisterField obj={obj} />)

  return (
    <div className="">
      {mapUserData()}
    </div>
  );
}
 
export default Registers;
