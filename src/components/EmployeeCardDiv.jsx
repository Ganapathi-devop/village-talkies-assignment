import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";

function EmployeeCardDiv({employee}) {
  return (
    <>
      <Box  sx={{ minWidth: 100, margin:1}}>
        <Card variant="outlined" sx={{borderRadius:2}}><CardValue employee={employee}/></Card>
      </Box>
    </>
  );
}

export default EmployeeCardDiv;

export const CardValue = ({employee}) => {
    // var employee = {
    //    name: "Employee Name",
    //    designation: "Designation",
    //    team: "Team"
    // }
  return (
    <>
      <CardContent sx={{padding:1, width:150, height:100}}>
        <Typography variant="h4" sx={{fontSize:25, display:"inline"}} align="left">
            {employee.name}
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 1, margin:0}} align="left" color="text.secondary">
          {employee.designation}
        </Typography>
        <Typography variant="body2" sx={{textAlign:"left"}}>
          {employee.team}
        </Typography>
        <Typography variant="subtitle2" align="left" >
            {"Employee Id: " + employee.employeeId}
        </Typography>
      </CardContent>
    </>
  );
};
