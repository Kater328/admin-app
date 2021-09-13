import usersApi from "../../utils/usersApi";
import { SET_USERS, DELETE_USER, UPDATE_USER } from "../reducers";

const setUsers = (users) => ({
    type: SET_USERS,
    payload: users
});

export const getUsers = () => {
    console.log('new');
    return (dispatch) => {
        usersApi.get()
        .then(resp => {
            dispatch(setUsers(resp.data))
        })
    }
}

export const deleteUser = (id) => {
    return (dispatch) => {
        usersApi.delete(`/${id}`)
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
        usersApi.put(`/${user.id}`, {...user})
        .then(({data}) => {
            dispatch({
                type: UPDATE_USER,
                payload: data
            })
        });
    }
}