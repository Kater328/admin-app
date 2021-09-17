import mainApi from "../../utils/mainApi";
import { SET_USERS, DELETE_USER, UPDATE_USER } from "../reducers/users";

const setUsers = (users) => ({
    type: SET_USERS,
    payload: users
});

export const getUsers = () => {
    return (dispatch) => {
        mainApi.get("users")
        .then(resp => {
            dispatch(setUsers(resp.data))
        })
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        mainApi.delete(`users/${id}`)
        .then(() => {
            dispatch({
                type: DELETE_USER,
                payload: id
            })
        });
    }
}

export const updateUser = (user) => {
    return (dispatch) => {
        mainApi.put(`users/${user.id}`, {...user})
        .then(({data}) => {
            dispatch({
                type: UPDATE_USER,
                payload: data
            })
        });
    }
}