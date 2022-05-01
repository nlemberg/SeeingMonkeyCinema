import axios from "axios";
import { combinedEmployeesAdd, combinedEmployeesDelete, combinedEmployeesEdit } from "./combinedEmployeeActions"
import { employeesGetAll } from "./employeeActions";
import { permissionsGetAll } from "./permissionActions";

const url = "http://localhost:8001/employeeLogins";

const employeeLoginsGetAll = () => async (dispatch) => {
        const { data: employeeLogins } = await axios.get(url);
        dispatch({ type: "EMPLOYEE_LOGINS_GET_ALL", payload: employeeLogins, })
    }

const employeeLoginsCreatePass = (newUser) => async (dispatch) => {
    await axios.put(`${url}/${newUser._id}`, newUser);
    await dispatch(employeeLoginsGetAll())
}

const employeeLoginsEdit = (employee) => async (dispatch) => {
    const { data: success } = await axios.put(`${url}/${employee.id}`, employee);
    await dispatch(employeeLoginsGetAll()) 
    await dispatch(employeesGetAll()) 
    await dispatch(permissionsGetAll()) 
    const combinedEmployeeToEdit = {...employee}
    await dispatch(combinedEmployeesEdit({...combinedEmployeeToEdit}));
    alert(success)
}

const employeeLoginsAddNew = (newEmployee) => async (dispatch) => {
    const { data: addedEmployee } = await axios.post(url, newEmployee);
        
    const combinedEmployee = {
        id: addedEmployee._id,
        firstName: newEmployee.firstName,
        lastName: newEmployee.lastName,
        userName: newEmployee.userName,
        createdAt: addedEmployee.createdAt,
        permissions: newEmployee.permissions
    }
    await dispatch(employeeLoginsGetAll()) 
    await dispatch(employeesGetAll()) 
    await dispatch(permissionsGetAll()) 
    await dispatch(combinedEmployeesAdd(combinedEmployee)) 
    alert("Employee added successfully")
}

const employeeLoginsDelete = (id) => async (dispatch) => {
    const { data: deleted } = await axios.delete(`${url}/${id}`);
    alert(deleted)
    await dispatch(employeeLoginsGetAll()) 
    await dispatch(employeesGetAll()) 
    await dispatch(permissionsGetAll()) 
    await dispatch(combinedEmployeesDelete(id));
}

export { employeeLoginsGetAll, employeeLoginsCreatePass, employeeLoginsAddNew, employeeLoginsDelete, employeeLoginsEdit }