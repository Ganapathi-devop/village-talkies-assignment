import { useState } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./App.css";
import HirarchyComponent from "./components/HirarchyComponent";
import ListComponent from "./components/ListComponent";
import rootReducer from "./Redux/Reducer/Redux";
import Data from "./data.json";

function App() {
  const [getEmployeeList, setEmployeeList] = useState(Data.employee);
  // const APIURL = "https://6b466d85-2421-4d6f-a9dc-5a0e6d78bb07.mock.pstmn.io/listOfEmployee"
  const store = createStore(
    rootReducer,
    window._REDUXDEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
    applyMiddleware(thunk)
  );
  // useEffect(() => {
  //   axios
  //     .get(APIURL)
  //     .then((res) => {
  //       const employee = res.data.employee;
  //       setEmployeeLIst(employee);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  
  return (
    <Provider store={store}>
      <div className="App">
        <ListComponent  getEmployeeList={getEmployeeList} setEmployeeList={setEmployeeList}/>
        <HirarchyComponent employeeList={getEmployeeList} />
      </div>
    </Provider>
  );
}

export default App;
