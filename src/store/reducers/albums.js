export const SET_ALBUMS = "SET_ALBUMS";
export const SET_ALBUM_PHOTOS = "SET_ALBUM_PHOTOS";

const initialState = {
    albums: [],
    albumPhotos: []
};

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SET_ALBUMS:
            return {
                ...state,
                albums: payload
            };
        case SET_ALBUM_PHOTOS:
            return {
                ...state,
                albumPhotos: payload
            };
        default: 
            return state;
    }
}

export default reducer;
