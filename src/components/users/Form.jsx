import { connect } from "react-redux";
import { withRouter } from "react-router";
import React from "react";
import { deleteUser, updateUser } from "../../store/actions/users";
import ItemForm from "./ItemForm";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const nameValid = /^[A-Za-z]+\s[A-Za-z]+$/;
const usernameValid = /^[A-Za-z0-9]+$/;
const emailValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z]+.[a-z]+$/;
const phoneValid = /^[\d- x().]+$/;
const websiteValid = /^[a-zA-Z]+.[a-zA-Z]+$/;
const companyValid = /^[A-Za-z- ]+$/;

class Form extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        user: null,
        isNameError: true,
        isUserNameError: true,
        isEmailError: true,
        isPhoneError: true,
        isWebsiteError: true,
        isCompanyError: true
      };
    }
  
    componentDidMount(){
        this.setState({user: this.props.user});
    }

    checkInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        switch(name){
            case "name":
                this.setState({isNameError: value.match(nameValid) && value.length > 6});
                break;
            case "username":
                this.setState({isUserNameError: value.match(usernameValid) && value.length > 3});
                break;
            case "email":
                this.setState({isEmailError: value.match(emailValid)});
                break;
            case "phone":
                this.setState({isPhoneError: value.match(phoneValid) && value.length > 6});
                break;
            case "website":
                this.setState({isWebsiteError: value.match(websiteValid) && value.length > 5});
                break;
            case "company":
                this.setState({isCompanyError: value.match(companyValid) && value.length > 5});
                break;
            default: break;
        }
    }

    changeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({user: {...this.state.user, [name]: value}}); 
        this.checkInput(e);
    }

    newInput = (itemError, itemName) => {
        return(
            <ItemForm 
                error={itemError}
                name={itemName}
                label={itemName[0].toUpperCase() + itemName.slice(1)}
                value={this.props.user[itemName].name || this.props.user[itemName]}
                changeInput={this.changeInput}
            />
        );
    }

    checkForm = () => {
        return !(this.state.isNameError && 
                this.state.isUserNameError && 
                this.state.isEmailError &&
                this.state.isPhoneError &&
                this.state.isWebsiteError &&
                this.state.isCompanyError);
    }

    render() {
    if (!this.props.user) return null;

    return (
        <form style={{border:'1px solid', padding:'2%'}}> 
            <List>
                <ListItem>
                    {this.newInput(!this.state.isNameError, "name")}
                </ListItem>
                <ListItem>
                    {this.newInput(!this.state.isUserNameError, "username")}
                </ListItem>
                <ListItem>
                    {this.newInput(!this.state.isEmailError, "email")}
                </ListItem>
                <ListItem>
                    {this.newInput(!this.state.isPhoneError, "phone")}
                </ListItem>
                <ListItem>
                    {this.newInput(!this.state.isWebsiteError, "website")}
                </ListItem>
                <ListItem>
                    {this.newInput(!this.state.isCompanyError, "company")}
                </ListItem>
            </List>
            <Button 
                disabled={this.checkForm()}
                variant="contained" 
                color="primary" 
                startIcon={<SaveIcon />}
                onClick={() => {
                    this.props.updateUser(this.state.user);
                    this.props.history.push('/users');
                }}>
                    Save changes
            </Button>
            <Button 
                variant="contained" 
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => {
                    this.props.deleteUser(this.props.user.id);
                    this.props.history.push('/users');
                }}>
                    Delete User
            </Button>
        </form>
    );
    }
}

const mapStateToProps = (state, props) => {
    const user = state.users.users.find(
        user => 
        user.id === Number(props.match.params.id)
    );
    return {
        user
    };
}

const mapDispatchToProps = {
    deleteUser,
    updateUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));