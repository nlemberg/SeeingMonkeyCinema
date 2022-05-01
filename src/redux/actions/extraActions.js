// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";


// // const CombinedEmployeesGetById = (id) => {
// //     const combinedEmployees = useSelector(state => state.combinedEmployees)
// //     const combinedEmployee = combinedEmployees.find(employee => employee.id === id)
// //     return combinedEmployee
// // }

// // const createCombinedEmployee = (newEmployee, newPermissions) => {
// //     const newCombinedEmployee = {...newEmployee, /*fullName: newEmployee.firstName + " " + newEmployee.lastName,*/ permissions: newPermissions}
// //     // console.log(newCombinedEmployee.permissions);
// //     return newCombinedEmployee
// // }

// const CheckPermissions = (permission) => {
//     const history = useHistory()
//     const permissions = useSelector(state => state.permissions)
//     const userPermissions = permissions.find(permission => permission.id === sessionStorage.getItem("employeeId")).permissions
//     const permissionsFinal = Object.keys(userPermissions).filter((key) => userPermissions[key]) //.join(", ").split(/(?=[A-Z])/).join(" ").toLowerCase()
//     console.log(permissionsFinal);
//     if (permissionsFinal.includes(permission)) {
//         return permission
//     } else {
//         return history.push("/home/access-denied")
//     }
// }

// export { /*CombinedEmployeesGetById, createCombinedEmployee,*/  CheckPermissions }