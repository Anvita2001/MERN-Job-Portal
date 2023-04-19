import React, {Component} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Register extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            Email: "",
            Password: ""
            //date:null
        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
                this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangeEmail(event) {
        this.setState({ Email: event.target.value });
    }
 onChangePassword(event) {
        this.setState({ Password: event.target.value });
    }
      
    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            Email: this.state.Email,
            Password: this.state.Password
            
            //date: Date.now()
        }
        axios.post('http://localhost:4000/recruiter/profile', newUser)
             .then(res => 
                {
                    //alert("Created\t" + res.data.Email);
                    console.log("hi",res.data);
             
   if (res.data.val === 0) {
        console.log("Invalid");
        alert("Please enter valid credentials");
    }
          if (res.data.val === 1) {
        console.log("found")

          this.props.history.push("/rechome");
        
          
      }
    });

    localStorage.setItem("Emails", this.state.Email);
        this.setState({
            Email: '',
            Password:''
        
            //date:null
        });
    }

    render() {
        return (
            <div>
            <h3>Login page for Recruiter</h3>
                <form onSubmit={this.onSubmit}>
                   
                    
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
                           
                              

                        <input type="submit" value="Submit" className="btn btn-primary"/>
              <div>Not a Recruiter?
              <Link to="/appprofile">Click Here
              </Link></div>
                </form>
            </div>
        )
    }
}
