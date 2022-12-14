import { enableRipple } from "@syncfusion/ej2-base";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
import React, { useRef } from "react";
import { useStore } from "react-redux";
import "./hirarchycomponent.css";
enableRipple(true);

function HirarchyComponent({ employeeList }) {
  const store = useStore();
  var employee = store.getState();
  var list = employee.employeeList;
  console.log(list);
  console.log(employeeList);
  const objTree = useRef();
  var masterTreeData = {};
  var managers = new Set();
  list.map((listItem) => {
    employeeList.map((defaultListItem) => {
      if (defaultListItem.employeeId === listItem.managerId) {
        managers.add(defaultListItem);
      }
      return null;
    });
    return null;
  });
  console.log(managers);
  for (let i = 0; i < managers.size; i++) {
    let arr = [];
    let managersArr = [];
    managers.forEach((i) => {
      managersArr.push(i);
    });
    list.map((listItem) => {
      if (managersArr[i].employeeId === listItem.managerId) {
        arr.push(listItem);
      }
      return null;
    });
    masterTreeData[managersArr[i].employeeId] = arr;
  }
  console.log(masterTreeData);

  var arr = Object.keys(masterTreeData);
  console.log(arr);
  var iteration = 0;
  let obj = {};
  var finalArr = [];
  const managerAdder = () => {
    let result = {};
    list.map((item, index) => {
      console.log("managerAdder");
      var employeeId = arr[arr.length - 1]
      if (item.employeeId === parseInt(employeeId) ) {
        console.log(item);
        result = item;
        result.child = obj;
        console.log(result);
        finalArr.push(result);
        console.log(finalArr);
      }

      return null;
    });
    objTree.current = finalArr;
    console.log(objTree.current);
  };
  const managerHandleFun = (manager) => {
    obj = masterTreeData[manager];
    iteration = iteration + 1;
    if (obj.length > 1) {
      obj.forEach((val, index) => {
        obj[index].child = masterTreeData[obj[index].employeeId];
      });
    } else {
      obj[0]["child"] = masterTreeData[obj[0].employeeId];
    }
    if (iteration < arr.length) {
      managerHandleFun(arr[iteration]);
    } else {
      managerAdder();
    }
  };
  let a = arr[0];
  managerHandleFun(a);
  console.log(obj);

  console.log(finalArr);

  let fields = {
    dataSource: objTree.current,
    id: "employeeId",
    parentID: "managerId",
    text: "name",
    hasChildren: "hasChild",
  };
  let allowDragAndDrop = true;
  console.log(objTree.current);
  console.log(fields);
  return (
    <div className="body-hirarchy-comp">
      {/*  specifies the tag for render the TreeView component */}
      <TreeViewComponent fields={fields} allowDragAndDrop={allowDragAndDrop} />
    </div>
  );
}

export default HirarchyComponent;

// ---default obj creation---
// const managerHandleFun = (manager) => {
// console.log(manager);
// console.log(masterTreeData[manager]);
// obj = masterTreeData[manager];
// iteration = iteration + 1;
// console.log(iteration + "  :iteration");
// console.log(obj.length + "  obj length");
// if (obj.length > 1) {
//   obj.forEach((val, index) => {
//     console.log(val);
//     obj[index].child = masterTreeData[obj[index].employeeId];
//   });
// } else {
//   obj[0]["child"] = masterTreeData[obj[0].employeeId];
// }
// console.log("obj after push");
// console.log(obj);
// if (iteration < arr.length) {
//   managerHandleFun(arr[iteration]);
// }
// };
// let a = arr[0];
// managerHandleFun(a);

// ---direct tag creation---
// const mapper = (arr)=>{
//   console.log(arr);
//   let result = []
//   arr.map((i)=>{
//     result.push(<TreeItem nodeId="2" label={i.name} />)
//   })
//   return result
// }
// const managerHandleFun = (manager) => {
//   console.log(manager);
//   console.log(masterTreeData[manager]);
//   obj = masterTreeData[manager];
//   iteration = iteration + 1;
//   console.log(iteration + "  :iteration");
//   console.log(obj.length + "  obj length");
//   if (obj.length > 1) {
//     obj.forEach((val, index) => {
//       console.log(val);
//       console.log(masterTreeData[obj[index].employeeId]);
//       if(masterTreeData[obj[index].employeeId] !== undefined){
//         obj[index].child = mapper(masterTreeData[obj[index].employeeId]);
//       }

//     });
//   } else {
//     obj[0]["child"] = mapper(masterTreeData[obj[0].employeeId]);
//   }
//   console.log("obj after push");
//   console.log(obj);
//   if (iteration < arr.length) {
//     managerHandleFun(arr[iteration]);
//   }
// };
// let a = arr[0];
// managerHandleFun(a);
