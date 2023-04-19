

import React, { Component } from "react";
import axios from "axios";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Navbar from 'react-bootstrap/Navbar'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
export default class JobList extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        Email_of_Recruiter:"",
        jobs:[]
      };
              this.onChangeEmail_of_Recruiter = this.onChangeEmail_of_Recruiter.bind(this);

              this.onSubmit = this.onSubmit.bind(this);

  }
  onChangeEmail_of_Recruiter(event) {
        this.setState({ Email_of_Recruiter: event.target.value });
    }
    onSubmit(e) {
                e.preventDefault();

        const newUser = {
                        //Email_of_Recruiter: localStorage.getItem("Emails")
                        Email_of_Recruiter:this.state.Email_of_Recruiter
                    };
    this.setState({ Email_of_Recruiter: newUser.Email_of_Recruiter });

       axios
              .post("http://localhost:4000/job/addedjobs",newUser)
              .then(response2 => {
                this.setState({ jobs: response2.data })
              })
              .catch(function(error) {
                console.log(error);
              });
             /* axios
              .get("http://localhost:4000/job/addedjobs",newUser)
              .then(response2 => {
                this.setState({ jobs: response2.data })
              })
              .catch(function(error) {
                console.log(error);
              });*/
                        localStorage.setItem("Emails", this.state.Email_of_Recruiter);

      }
  render(){
    return(
        <div>
             <h2>Navigation Bar for User</h2>
          <Navbar bg="dark" variant="dark">
            <Nav.Link href="/rechome">HOME</Nav.Link>

                            <Nav.Link href="/editrec">EDIT</Nav.Link>
                            <Nav.Link href="/addjob">Add Job</Nav.Link>
                                                        <Nav.Link href="/addedjobs">Added Job</Nav.Link>

                            <Nav.Link href="/profile">LOGOUT</Nav.Link>


        </Navbar>

        <form onSubmit={this.onSubmit}>
             
                  <h3> Change Name</h3>
        <div className="form-group">
                        <label>Email: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Email_of_Recruiter}
                               onChange={this.onChangeEmail_of_Recruiter}
                               required
                               /> 
                               </div>
                        <input type="submit" value="Submit" className="btn btn-primary"/>
          
                </form>
 <Grid container>
                    <Grid item xs={20} md={20} lg={9}>
                        <Paper>
         <table size="small">
                                <thead>
                                    <tr>
                                            <th> Job Title   </th>
                                            <th>Name of Recruiter</th>
                                            <th>  Job Type  </th>
                                            <th>Applications Open</th>
                                            <th>Positions Open</th>
                                            <th>Application Deadline</th>
                                            <th>Required Skills</th>
                                            <th>Duration</th>
                                            <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.jobs.map((user,ind) => (
                                        <tr key={ind}>
                                            <td>{user.Title}</td>
                                            <td>{user.Name_of_Recruiter}</td>
                                    <td>{user.Job_type}</td>
                                    
                                                                            <td>{user.Applications_allowed}</td>  <td>{user.Positions}</td>
                                                                            <td>{user.Date_deadline}</td>
                                                                            <td>{user.Required_skills}</td>
                                                                            <td>{user.Duration}</td>
                                                                            <td>{user.Salary}</td>




                                        </tr>
                                ))}
                                </tbody>
                            </table>
                            </Paper>               
                    </Grid>    
               </Grid> 
                            </div>)
  }}

