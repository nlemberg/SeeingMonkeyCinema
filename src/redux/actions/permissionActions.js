import axios from "axios";

const permissionsGetAll = () => async (dispatch) => {
    const { data: permissions } = await axios.get("http://localhost:8001/permissions");
    dispatch({ type: "PERMISSIONS_GET_ALL", payload: permissions, })
}

export { permissionsGetAll }