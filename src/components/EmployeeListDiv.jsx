import { useStore } from "react-redux";
import { LOAD_SUCCESS } from "../Redux/Reducer/Actions/Actions";
import EmployeeCardDiv from "./EmployeeCardDiv";

function EmployeeListDiv({ employeeList, filtered }) {
  const store = useStore();
  const employeeListHandle = (list) => {
    store.dispatch({ type: LOAD_SUCCESS, employeeList: list });
    return list.map((item) => {
      return <EmployeeCardDiv employee={item} />;
    });
  };
  return (
    <div className="employee-list">
      {filtered.length === 0
        ? employeeListHandle(employeeList)
        : employeeListHandle(filtered)}
    </div>
  );
}

export default EmployeeListDiv;
