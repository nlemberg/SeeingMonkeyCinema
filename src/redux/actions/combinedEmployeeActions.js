const createCombinedEmployee = (newEmployee, newPermissions) => {
  const newCombinedEmployee = {...newEmployee, permissions: newPermissions}
  return newCombinedEmployee
}

const combinedEmployeesAdd = (newEmployee) => async (dispatch, getState) => {
  const combinedEmployees = await getState().combinedEmployees
  const newCombinedEmployees = [...combinedEmployees, newEmployee]
  await dispatch({ type: "COMBINED_EMPLOYEES_GET_ALL", payload: newCombinedEmployees })
}

const combinedEmployeesDelete = (employeeId) => async (dispatch, getState) => {
  const combinedEmployees = await getState().combinedEmployees
  const employeeIndex = combinedEmployees.findIndex(employee => employee.id === employeeId)
  combinedEmployees.splice(employeeIndex, 1)
  await dispatch({ type: "COMBINED_EMPLOYEES_GET_ALL", payload: combinedEmployees })
}

const combinedEmployeesEdit = (employee) => async (dispatch, getState) => {
  let combinedEmployees = await getState().combinedEmployees
  const combinedEmployeeIndex = await combinedEmployees.findIndex(combinedEmployee => combinedEmployee.id === employee.id)
  await combinedEmployees.splice(combinedEmployeeIndex, 1, employee)
  await dispatch({ type: "COMBINED_EMPLOYEES_GET_ALL", payload: combinedEmployees })
}

const combinedEmployeesCreateAll = () => async (dispatch, getState) => {
  const employees = await getState().employees
  const employeeLogins = await getState().employeeLogins
  const permissionsInfo = await getState().permissions

  const combinedEmployees = employeeLogins.map(employeeLogin => {
    const employee = employees.find(employee => employee.id === employeeLogin._id)
    const thisPermissions = permissionsInfo.find(permissions => permissions.id === employeeLogin._id)
    const { permissions } = thisPermissions
    const combinedEmployee = {id: employeeLogin._id, firstName: employee.firstName, lastName: employee.lastName,  userName: employeeLogin.userName, createdAt: employeeLogin.createdAt, permissions}
    return combinedEmployee
  })
  dispatch({ type: "COMBINED_EMPLOYEES_GET_ALL", payload: combinedEmployees })
}

export { createCombinedEmployee, combinedEmployeesAdd, combinedEmployeesCreateAll, combinedEmployeesDelete, combinedEmployeesEdit }