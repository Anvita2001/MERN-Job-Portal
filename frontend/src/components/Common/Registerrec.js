import React, {Component} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Register extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            Name: "",
            Email: "",
            Password: "",
            Contact:"",
            Bio:""
     
            //date:null
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
                this.onChangePassword = this.onChangePassword.bind(this);
                this.onChangeContact = this.onChangeContact.bind(this);
                      this.onChangeBio = this.onChangeBio.bind(this);


        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeUsername(event) {
        this.setState({ Name: event.target.value });
    }

    onChangeEmail(event) {
        this.setState({ Email: event.target.value });
    }
 onChangePassword(event) {
        this.setState({ Password: event.target.value });
    }
        onChangeContact(event) {
        this.setState({ Contact: event.target.value });
    }
 onChangeBio(event) {
        this.setState({ Bio: event.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            Name: this.state.Name,
            Email: this.state.Email,
            Password: this.state.Password,
            Contact: this.state.Contact,
               Bio: this.state.Bio,

            //date: Date.now()
        }
        axios.post('http://localhost:4000/recruiter/login', newUser)
             .then(res => {
              if (res.data.val === 0) {
        console.log("Invalid");
        alert("Please enter valid credentials/Use another email");
    }
          if (res.data.val === 1) {
                alert("Created new user");console.log(res.data)}
              })
             ;

        this.setState({
            Name: '',
            Email: '',
            Password:'',
          Contact:'',
            Bio:''
            //date:null
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Name}
                               onChange={this.onChangeUsername}
                               required
                               />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="email" 
                               className="form-control" 
                               value={this.state.Email}
                               onChange={this.onChangeEmail}
                               required
                               />  
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" 
                               className="form-control" 
                               value={this.state.Password}
                               onChange={this.onChangePassword}
                               required
                               /> 
                               </div>
                                     <div className="form-group">
                        <label>Contact: </label>
                        <input type="number" 
                               className="form-control" 
                               value={this.state.Contact}
                               onChange={this.onChangeContact}
                               required
                               /> 
                               </div> 
                                 <div className="form-group">
                        <label>Bio: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Bio}
                               onChange={this.onChangeBio}
                               /> 
                               </div>
<Link to="/upload">Upload here</Link>
                    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
