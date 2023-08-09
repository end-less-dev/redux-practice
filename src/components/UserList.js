import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { FetchUserList, RemoveUser } from "../redux/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const UserList = (props) => {
  useEffect(() => {
    props.loaduser();
  }, []);
  const deleteUser = (id)=>{
    if(window.confirm("Are you sure do you want delete ?")){
      props.removeUser(id);
      props.loaduser();
    }
  }
  return props.user.isLoading ? (
    <h1>Loading...</h1>
  ) : props.user.errorMessage ? (
    <h1>{props.user.errorMessage}</h1>
  ) : (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          User List
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.user.userList &&
                props.user.userList.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>
                      <Link
                        to={"/user/update/" + row.id}
                        style={{ marginRight: "5px" }}
                      >
                        Edit
                      </Link>
                      <Button variant="contained" color="error" size="small"
                      onClick={()=>deleteUser(row.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeUser : (id)=> dispatch(RemoveUser(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
