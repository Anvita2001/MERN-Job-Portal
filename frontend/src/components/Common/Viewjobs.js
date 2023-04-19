

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
       // Email_of_Recruiter:"",
        jobs:[],
        search:"",
        type:"",
      };
        this.sort=this.sort.bind(this);
                this.apply=this.apply.bind(this);

      this.onChangeType = this.onChangeType.bind(this);      
  }
   componentDidMount() {
        axios.get('http://localhost:4000/job/')
             .then(response => {
        // console.log("hi", this.state);
                 this.setState({jobs: response.data});
             })
             .catch(function(error) {
                 console.log(error);
             })
    }
  onChangeType(event) {
    this.setState({ type: event.target.value });
  }
  onchange = e =>{
    this.setState({search : e.target.value});
  }
  sort=(s)=>{
    const t = {
      type:this.state.type
    };
    console.log("sending ",t.type)
    axios
      .post("http://localhost:4000/job/sortjobs",t)
      .then(response => {
     
                this.setState({ jobs: response.data })
            
              })
      .catch(function(error) {
        console.log(error);
      });
    // this.componentDidMount();
  }
  apply(e){
    const newdash={
      Email:localStorage.getItem("Email"),
      Title:e.Title,
      Name_of_Recruiter:e.Name_of_Recruiter,
      Email_of_Recruiter:e.Email_of_Recruiter,
      Applications_allowed:e.Applications_allowed,
      Positions:e.Positions,
      Date_deadline:e.Date_deadline,
      Required_skills:e.Required_skills,
      Job_type:e.Job_type,
      Duration:e.Duration,
      Salary:e.Salary,
      Jobid:e._id

    };
       axios
      .post("http://localhost:4000/dash/add", newdash)
      .then(response => {
        // this.setState({ prods: response.data });
        if(response.data == "1")
          alert("Sorry, There was some error");
        else
          alert("Application successful!")
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });

    }

  render(){
    return(
        <div>
      <h2>Navigation Bar for User</h2>
          <Navbar bg="dark" variant="dark">
            <Nav.Link href="/Userhome">HOME</Nav.Link>

                            <Nav.Link href="/editapp">EDIT</Nav.Link>
                            <Nav.Link href="/viewjobs">View Jobs</Nav.Link>

                            <Nav.Link href="/profile">LOGOUT</Nav.Link>
                            <Nav.Link href="/applied">Applied</Nav.Link>


        </Navbar>
<p class="text-danger">*Click on ADD Button to Apply</p>
        <Form.Group style={{paddingTop:15, paddingRight:15}}  controlId="exampleForm.ControlSelect1" value={this.state.type} onChange={this.onChangeType} inputRef={el => (this.inputEl = el)}>
              <Form.Control as="select">
                <option value="Salary">Salary</option>
                <option value="Duration">Duration</option>
              </Form.Control>
             </Form.Group>

      
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
                                
                                    {this.state.jobs.map((user,ind) => (
                                        <tr key={ind}>
                                            <td>{user.Title}</td>
                                            <td>{user.Name_of_Recruiter}</td>
                                    <td>{user.Job_type}</td>
                                    
                                                                            <td>{user.Applications_allowed}</td> 
                                                                             <td>{user.Positions}</td>
                                                                            <td>{user.Date_deadline}</td>
                                                                            <td>{user.Required_skills}</td>
                                                                            <td>{user.Duration}</td>
                                                                            <td>{user.Salary}</td>
                                                                            <td className="del-cell">
                  <Button variant="outline-danger" className="btn btn-primary" value="apply" onClick={()=>{this.apply(user);}}>Add</Button>
                  </td>
                                       </tr>
                                ))}
                            
                            </table>
                            </Paper>               
                    </Grid>    
               </Grid> </div>
                            )

  }}

