import { useEffect } from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import { connect } from "react-redux";
import { getUsers } from "../../store/actions";
import Container  from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import UserList from "./UsersList";

const Users = (props) => {
    const match = useRouteMatch();

    useEffect(() => {
        props.getUsers()
    }, []);

    return (
        <Container maxWidth="lg">
            <Typography variant="h3" align="center" color="primary">
                Users
             </Typography>
            <Switch>
                <Route path={match.path + "/"} exact>
                    <UserList users={props.users} />
                </Route>
                <Route path={match.path + "/:id"}>
                    <h2>Id User information</h2>
                </Route>
            </Switch>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
}

const mapDispatchToProps = {
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);