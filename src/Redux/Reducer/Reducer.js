import { LOAD_SUCCESS } from "./Actions/Actions";

const initialState = {
  loading: false,
  employeeList: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SUCCESS: {
      // console.log(JSON.stringify(action.movies))
      return {
        ...state,
        employeeList: action.employeeList,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
