import React from "react";
import { useHistory } from "react-router";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const ItemAlbumsList = ({album, creator}) => {
    const history = useHistory();

    return(
        <TableRow 
            hover
            onClick={() => history.push("/albums/"+ album.id)}>
            <TableCell>{album.title}</TableCell>
            <TableCell>{creator}</TableCell>
        </TableRow>
    );
}

export default ItemAlbumsList;