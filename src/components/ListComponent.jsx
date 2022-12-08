import { TextField } from "@mui/material";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import EmployeeListDiv from "./EmployeeListDiv";
import "./listcomponent.css";

function ListComponent({getEmployeeList, setEmployeeList}) {
  const [getFiltered, setFiltered] = useState([]);

  // "https://86c2d47d-242b-4352-90d3-4348acc14c19.mock.pstmn.io/employee";

  const SearchHandle = (e) => {
    let regex = /^[a-zA-Z]+$/;
    let val = e.target.value;
    let arr = [];
    if (e.key === "Enter") {
      if (val !== "") {
        if (val.match(regex)) {
          getEmployeeList.map((i) => {
            if (i.name.toLowerCase() === val) {
              arr.push(i);
            }
            return null;
          });
        } else {
          val = parseInt(val);
          getEmployeeList.map((i) => {
            if (i.employeeId === val) {
              arr.push(i);
            }
            return null;
          });
        }
        setFiltered(arr);
      } else {
        setFiltered([]);
      }
    }
  };

  const filterToggleFunction = (e) => {
    if (e.target.innerText === "filter_alt") {
      e.target.innerText = "filter_alt_off";
      document
        .querySelector(".filters-list-comp")
        .classList.add("display-none");
      setFiltered([]);
    } else {
      e.target.innerText = "filter_alt";
      document
        .querySelector(".filters-list-comp")
        .classList.remove("display-none");
    }
  };

  const filterHandle = (e) => {
    var filterInput = e.target.innerText;
    let filteredList = [];
    getEmployeeList.map((i) => {
      if (i.designation === filterInput) {
        filteredList.push(i);
      }
      return null;
    });
    setFiltered(filteredList);
  };
  const getEmpDes = () => {
    let designation = new Set();
    getEmployeeList.map((i) => {
      designation.add(i.designation);
      return null;
    });
    var arr = [];
    designation.forEach((i) => {
      arr.push(i);
    });
    return arr.map((i) => {
      return <p onClick={(e) => filterHandle(e)}>{i}</p>;
    });
  };
  return (
    <div className="body-list-comp">
      <div className="search-bar-list-comp">
        <TextField
          id="standard-basic"
          label="Name or Employee ID"
          variant="standard"
          type={"search"}
          placeholder={"Enter"}
          className="text-field-searchbar"
          sx={{ minWidth: 250 }}
          onKeyDown={(e) => {
            SearchHandle(e);
          }}
        />
        <span
          className="material-symbols-outlined"
          onClick={(e) => filterToggleFunction(e)}
        >
          filter_alt
        </span>
      </div>
      <div className="filters-list-comp">{getEmpDes()}</div>
      <EmployeeListDiv employeeList={getEmployeeList} filtered={getFiltered} />
    </div>
  );
}

export default ListComponent;

// {getFiltered.length == 0? employeeList.map((item) => {
//     return <EmployeeCard employee={item} />;
//   }): getFiltered.map()}
