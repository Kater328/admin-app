import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Typography from "@material-ui/core/Typography";
import { getAlbumPhotos } from "../../store/actions/albums";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

const AlbumPhotos = (props) => {

    useEffect(() => {
        if(!props.album) return;
        props.getAlbumPhotos(props.album.id);
    }, []);

    if(!props.album) return null;
    return (
        <>
            <Typography variant="h3" align="center" color="primary">
                Album {props.album.id}
            </Typography>
            <Typography variant="h4" align="center" color="primary">
                {props.album.title}
            </Typography>
            <ImageList cols={3} rowHeight={164}>
                {props.albumPhotos.map((photo) => (
                    <ImageListItem key={photo.id}>
                        <img
                            src={photo.url}
                            alt={photo.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}

const mapStateToProps = (state, props) => {
    const album = props.albums.find(
        album => album.id === Number(props.match.params.id)
    );
    return {
        album,
        albumPhotos: state.albums.albumPhotos
    };
}

const mapDispatchToProps = {
    getAlbumPhotos
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumPhotos));