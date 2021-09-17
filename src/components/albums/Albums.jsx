import { useEffect } from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import { connect } from "react-redux";
import { getAlbums } from "../../store/actions/albums";
import Container  from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import AlbumsList from "./AlbumsList";
import AlbumPhotos from "./AlbumPhotos";

const Albums = (props) => {
    const match = useRouteMatch();

    useEffect(() => {
        props.getAlbums();
    }, []);

    return (
        <Container maxWidth="lg">
            <Switch>
                <Route path={match.path + "/"} exact>
                    <Typography variant="h3" align="center" color="primary">
                        All Albums
                    </Typography>
                    <AlbumsList albums={props.albums} users={props.users} />
                </Route>
                <Route path={match.path + "/:id"}>
                    <AlbumPhotos albums={props.albums} />
                </Route>
            </Switch>
        </Container>
    )
}

const mapStateToProps = (state, props) => {
    return {
        albums: state.albums.albums.filter(
            (album) => props.users.some(
                (user) => user.id === album.userId
            )
        )
    };
}

const mapDispatchToProps = {
    getAlbums
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);