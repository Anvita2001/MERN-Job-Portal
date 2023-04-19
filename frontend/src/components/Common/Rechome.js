import React, { Component } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from 'react-bootstrap/Navbar'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Rechome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      id: "",
      data: {}
    };
  }
   componentDidMount() {
    const newUser = {
      Email: localStorage.getItem("Emails")
    };
    this.setState({ Email: newUser.Email });
    axios
      .post("http://localhost:4000/recruiter/homepage", newUser)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
          localStorage.setItem("Emails", this.state.Email);


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

                            <Nav.Link href="/profile">LOGOUT</Nav.Link>


        </Navbar>
        <br/>
        <br/>

        
        <div style={{backgroundColor:" #0066ff", padding:100, textAlign:"left"}}>
        <h1>Name:{this.state.data.Name} !</h1>
        <h1>Contact:{this.state.data.Contact}</h1>
                <h1>Bio:{this.state.data.Bio} !</h1>
        </div>
      </div>
    );
  }
}