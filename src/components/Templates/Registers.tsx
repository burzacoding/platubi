import { useDashboard } from "../../contexts/DashboardContext";
import RegisterField from "../molecules/RegisterField";

const Registers: React.FC = () => {

  const { userData } = useDashboard()

  const mapUserData = () =>  userData?.registers?.map((obj) => <RegisterField obj={obj} key={obj.key} />)

  return (
    <div className="">
      {mapUserData()}
    </div>
  );
}
 
export default Registers;
