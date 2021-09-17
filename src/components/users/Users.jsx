import {Route, Switch, useRouteMatch} from "react-router-dom";
import Container  from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import UserList from "./UsersList";
import Form from "./Form";

const Users = (props) => {
    const match = useRouteMatch();

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

export default Users;