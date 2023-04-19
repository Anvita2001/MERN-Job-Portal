import React, {Component} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Editrec extends Component {


    constructor(props) {
        super(props);

        this.state = {
            Email: "",
            Name:"",
            Contact:"",
            Bio:""
            
         
        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
                this.onChangeName= this.onChangeName.bind(this);
     
        this.onChangeContact = this.onChangeContact.bind(this);
                this.onChangeBio= this.onChangeBio.bind(this);           
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmit1 = this.onSubmit1.bind(this);
        this.onSubmit2 = this.onSubmit2.bind(this);
                

    }
   
    onChangeEmail(event) {
        this.setState({ Email: event.target.value });
    }
      onChangea(event) {
        this.setState({ a: event.target.value });
    }
 onChangeName(event) {
        this.setState({ Name: event.target.value });
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
                //Email:localStorage.getItem("Emails"),
                 Email:this.state.Email,
            Name:this.state.Name
            
            //date: Date.now()
        }
//const a=this.state.Email;

        axios.post('http://localhost:4000/recruiter/update/', newUser)
             .then(res => 
{                    alert("Name changed");
});
                 localStorage.setItem("Emails", this.state.Email); 

      this.setState({
       Email:'',
            Name:''
        
            //date:null
        });
    }
         onSubmit1(e) {
        e.preventDefault();

        const newUser = {
                Email: localStorage.getItem("Emails"),
//this.setState({ Email: newUser.Email });
     
           Email: this.state.Email,
            Contact: this.state.Contact
            
            //date: Date.now()
        }

        axios.post('http://localhost:4000/recruiter/update1/', newUser)
             .then(res => 
{                    alert("Contact changed");
});

                 localStorage.setItem("Emails", this.state.Email); 
                             //this.setState({ Email: newUser.Email });
     
      this.setState({
        Email:'',
            Contact:''
        
            //date:null
        });
    }
        onSubmit2(e) {
        e.preventDefault();

        const newUser = {
                Email: localStorage.getItem("Emails"),
//this.setState({ Email: newUser.Email });
     
           Email: this.state.Email,
            Bio: this.state.Bio
            
            //date: Date.now()
        }

        axios.post('http://localhost:4000/recruiter/update2/', newUser)
             .then(res => 
{                    alert("Bio changed");
});

                 localStorage.setItem("Emails", this.state.Email); 
                             //this.setState({ Email: newUser.Email });
     
      this.setState({
        Email:'',
            Bio:''
        
            //date:null
        });
    }
    render() {
        return (
          <div>
      <h2>Navigation Bar for User</h2>
          <Navbar bg="dark" variant="dark">
            <Nav.Link href="/rechome">HOME</Nav.Link>

                            <Nav.Link href="/editrec">EDIT</Nav.Link>
                      <Nav.Link href="/addjob">Add Job</Nav.Link>
                                                                              <Nav.Link href="/addedjobs">Added Job</Nav.Link>

                            <Nav.Link href="/">LOGOUT</Nav.Link>

        </Navbar>
            <h5 class="text-danger">*Please Logout and login again if changes do not reflect</h5>
            <br/>
                <form onSubmit={this.onSubmit}>
             
                  <h3> Change Name</h3>
        <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Email}
                               onChange={this.onChangeEmail}
                               required
                               /> 
                               </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Name}
                               onChange={this.onChangeName}
                               required
                               /> 
                               </div>

                        <input type="submit" value="Submit" className="btn btn-primary"/>
          
                </form>
                <form onSubmit={this.onSubmit1}>
             
                  <h3> Change Name</h3>
            <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Email}
                               onChange={this.onChangeEmail}
                               required
                               /> 
                               </div>
                    <div className="form-group">
                        <label>Contact: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Contact}
                               onChange={this.onChangeContact}
                               required
                               /> 
                               </div>

                        <input type="submit" value="Submit" className="btn btn-primary"/>
          
                </form>
                          <form onSubmit={this.onSubmit2}>
             
                  <h3> Change Name</h3>
            <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Email}
                               onChange={this.onChangeEmail}
                               required
                               /> 
                               </div>
                    <div className="form-group">
                        <label>Bio: </label>
                        <input type="text" 
                        maxLength="500"
                               className="form-control" 
                               value={this.state.Bio}
                               onChange={this.onChangeBio}
                               required
                               /> 
                               </div>

                        <input type="submit" value="Submit" className="btn btn-primary"/>
          
                </form>

            </div>
        )
    }
}
