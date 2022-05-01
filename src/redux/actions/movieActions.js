import axios from "axios";
import { subscriptionsGetAll } from "./subscriptionActions";

const url = "http://localhost:8000/movies";

const moviesGetAll = () => async (dispatch) => {
    const { data: movies } = await axios.get(url);
    dispatch({ type: "MOVIES_GET_ALL", payload: movies })
}

const moviesAddNew = (newMovie) => async (dispatch) => {
    const { data: success } = await axios.post(url, newMovie)
    await dispatch(moviesGetAll())
    alert(success)
}

const moviesEdit = (movie) => async (dispatch) => {
    const { data: success } = await axios.put(`${url}/${movie._id}`, movie)
    await dispatch(moviesGetAll())
    alert(success)
}

const moviesDelete = (id) => async (dispatch) => {
    const { data: success } = await axios.delete(`${url}/${id}`)
    await dispatch(moviesGetAll())
    await dispatch(subscriptionsGetAll())
    alert(success)
}

export { moviesGetAll, moviesAddNew, moviesEdit, moviesDelete }