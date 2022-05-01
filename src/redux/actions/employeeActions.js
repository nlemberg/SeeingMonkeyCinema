import axios from "axios";

const url = "http://localhost:8001/employees";

const employeesGetAll = () => async (dispatch) => {
  const { data: employees } = await axios.get(url);
  dispatch({ type: "EMPLOYEES_GET_ALL", payload: employees });
};

export { employeesGetAll }