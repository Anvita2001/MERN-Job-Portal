import React, { Component } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from 'react-bootstrap/Navbar'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class Userhome extends Component {
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
      Email: localStorage.getItem("Email")
    };
    this.setState({ Email: newUser.Email });
    axios
      .post("http://localhost:4000/user/homepage", newUser)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
          localStorage.setItem("Email", this.state.Email);

  }
    render() {
    return (
      <div>
      <h2>Navigation Bar for User</h2>
          <Navbar bg="dark" variant="dark">
            <Nav.Link href="/Userhome">HOME</Nav.Link>

                            <Nav.Link href="/editapp">EDIT</Nav.Link>
                            <Nav.Link href="/viewjobs">View Jobs</Nav.Link>

                            <Nav.Link href="/profile">LOGOUT</Nav.Link>
                            <Nav.Link href="/applied">Applied</Nav.Link>


        </Navbar>
        <br/>
        <br/>

        
        <div style={{backgroundColor:" #0066ff", padding:100, textAlign:"left"}}>
        <h1>Name:{this.state.data.Name} !</h1>
        <h1>Skills:{this.state.data.Skills} </h1>
         <h1>Institution1_name:{this.state.data.Institution1_name} </h1>
                 <ul>
                 <li><h1>Start_year1:{this.state.data.Start_year1} </h1></li>
                                  <li><h1>End_year1:{this.state.data.End_year1} </h1>
</li>
</ul>
    <h1>Institution2_name:{this.state.data.Institution2_name} </h1>
                 <ul>
                 <li><h1>Start_year2:{this.state.data.Start_year2} </h1></li>
                                  <li><h1>End_year2:{this.state.data.End_year2} </h1>
</li>
</ul>
        



        </div>
      </div>
    );
  }
}