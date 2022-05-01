import axios from "axios";
import { subscriptionsGetAll } from "./subscriptionActions";

const url = "http://localhost:8000/members";

const membersGetAll = () => async (dispatch) => {
    const { data: members } = await axios.get(url);
    dispatch({ type: "MEMBERS_GET_ALL", payload: members })
}

const membersAddNew = (newMember) => async (dispatch) => {
    const { data: success } = await axios.post(url, newMember)
    await dispatch(membersGetAll())
    alert(success)
}

const membersEdit = (member) => async (dispatch) => {
    const { data: success } = await axios.put(`${url}/${member._id}`, member)
    await dispatch(membersGetAll())
    alert(success)
}

const membersEditSubscription = (memberId, movie) => async (dispatch) => {
    const { data: success } = await axios.post(`${url}/${memberId}`, movie)
    await dispatch(subscriptionsGetAll())
    alert(success)
}

const membersDelete = (id) => async (dispatch) => {
    const { data: success } = await axios.delete(`${url}/${id}`)
    await dispatch(membersGetAll())
    await dispatch(subscriptionsGetAll())
    alert(success)
}

export { membersGetAll, membersAddNew, membersEdit, membersEditSubscription, membersDelete }