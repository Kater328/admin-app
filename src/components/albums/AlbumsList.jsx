import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import ItemAlbumsList from "./ItemAlbumsList";

const AlbumsList = (props) => {
  return(
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead style={{background:"#3f51b5"}}>
          <TableRow>
            <TableCell style={{color:"#fff"}}>Title</TableCell>
            <TableCell style={{color:"#fff"}}>Creator</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.albums.map((album) => (
            <ItemAlbumsList
                key={album.id}
                album={album}
                creator={props.users.find(user => user.id === album.userId).name}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AlbumsList;
