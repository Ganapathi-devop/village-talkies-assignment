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


// import { createSlice } from '@reduxjs/toolkit';

// export const Reducer = createSlice({
//   name: 'employeeList',
//   initialState: [],
//   reducers: {
//     addTodo: (state, action) => {
//       const employeeList = action.payload

//       state.push(employeeList);
//   }}
// });

// // this is for dispatch
// export const { addEmployee } = Reducer.actions;

// // this is for configureStore
// export default Reducer.reducer;
