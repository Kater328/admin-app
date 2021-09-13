import usersApi from "../../utils/usersApi";
import { SET_USERS } from "../reducers";

const setUsers = (users) => ({
    type: SET_USERS,
    payload: users
});

export const getUsers = () => {
    return (dispatch) => {
        usersApi.get()
        .then(resp => {
            dispatch(setUsers(resp.data))
        })
    }
}