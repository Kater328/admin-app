import { useEffect } from "react";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import { connect } from "react-redux";
import { getUsers } from "../../store/actions";
import Container  from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import UserList from "./UsersList";
import Form from "./Form";

const Users = (props) => {
    const match = useRouteMatch();

    useEffect(() => {
        props.getUsers()
    }, []);

    return (
        <Container maxWidth="lg">
            <Switch>
                <Route path={match.path + "/"} exact>
                    <Typography variant="h3" align="center" color="primary">
                        All Users
                    </Typography>
                    <UserList users={props.users} />
                </Route>
                <Route path={match.path + "/:id"}>
                    <Typography variant="h3" align="center" color="primary">
                        Editing User
                    </Typography>
                    <Form />
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