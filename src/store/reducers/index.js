export const SET_USERS = "SET_USERS";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";

const initialState = {
    users: [],
    albums: []
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SET_USERS:
            return {
                ...state,
                users: payload
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(item => item.id !== payload)
            };
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(
                    item =>
                      item.id === payload.id ?
                        payload : item
                )
            };
        default: 
            return state;
    }
}

export default reducer;