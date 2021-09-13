import React from "react";
import { useHistory } from "react-router";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const ItemUsersList = ({user}) => {
    const history = useHistory();

    return(
        <TableRow 
            hover
            onClick={() => history.push("/users/"+ user.id)}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
        </TableRow>
    );
}

export default ItemUsersList;