import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import ItemUsersList from "./ItemUsersList";

const UserList = (props) => {
  return(
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead style={{background:"#3f51b5"}}>
          <TableRow>
            <TableCell style={{color:"#fff"}}>Name</TableCell>
            <TableCell style={{color:"#fff"}}>Email</TableCell>
            <TableCell style={{color:"#fff"}}>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((user) => (
            <ItemUsersList
                key={user.id}
                user={user}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UserList;
