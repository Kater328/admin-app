import mainApi from "../../utils/mainApi";
import { SET_ALBUMS, SET_ALBUM_PHOTOS } from "../reducers/albums";

const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    payload: albums
});

export const getAlbums = () => {
    return (dispatch) => {
        mainApi.get("/albums")
        .then(resp => {
            dispatch(setAlbums(resp.data))
        })
    }
}

const setAlbumPhotos = (photos) => ({
    type: SET_ALBUM_PHOTOS,
    payload: photos
});

export const getAlbumPhotos = (id) => {
    return (dispatch) => {
        mainApi.get(`photos/?albumId=${id}`)
        .then(resp => {
            dispatch(setAlbumPhotos(resp.data))
        })
    }
}