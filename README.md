
### Demo

# https://village-talkies-assignment.vercel.app/
#### Note the Mock Server used here is paid so only limited api calls are allowed  


# Employee Hirarchiy

A brief description of what this project does 
## Frontend Assignment from village talkies

Build a page that allows the user to visualise and update an employee organization chart 
interactively with drag & drop. 
### Data Model: 
- Employee: 
- ID
- Name
- Designation
- Team
- Manager - (points to another employee’s ID)

### Expected User Interface: 
On the left, show a list of employees pulled from an API endpoint. For each employee, show the 
name, designation, team on the list item. This list should have a search box to type and jump to 
an employee by any of the properties as well as a dropdown filter to filter the list of employees 
by a specific team.
When I use the left sidebar filter to filter the list by a specific team, only show the chart for those 
employees. 

On the right side of the screen, based on the entire list of employees, generate a tree like chart 


## API Reference

### Api Url:
#### https://6b466d85-2421-4d6f-a9dc-5a0e6d78bb07.mock.pstmn.io
#### Get all items

```
  GET /listOfEmployee
```

| Parameter | Type     | 
| :-------- | :------- | 
| `none` | `string` | 

#### Get item
```
GET /Employee
```

| Parameter | Type     | 
| :-------- | :------- | 
| `none` | `string` | 


returns the required employee data 


## Screenshots

![App Screenshot](https://user-images.githubusercontent.com/79808587/206453146-1974632c-c698-4089-bfd0-e3156cf4094a.jpg)


## Packages

To run this project, you will need to add the following variables to your app

`API_KEY` `Axios` `Mui`

##### Syncfusion Node Package
For `TreeViewComponent`  and the mapping  

