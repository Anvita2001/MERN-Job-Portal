
import React, { Component } from "react";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class VendorAddProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	Title:"",
     Name_of_Recruiter:"",
     Email_of_Recruiter:"",
     Applications_allowed:"",
     Positions:"",
     Date_deadline:"",
     Required_skills:"",
     Job_type:"",
     Duration:"",
     Salary:""
    };
        this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeName_of_Recruiter = this.onChangeName_of_Recruiter.bind(this);
    this.onChangeEmail_of_Recruiter= this.onChangeEmail_of_Recruiter.bind(this);
            //this.onChange = this.onChange.bind(this);
            this.onChangeApplications_allowed = this.onChangeApplications_allowed.bind(this);
            this.onChangePositions = this.onChangePositions.bind(this);
            this.onChangeDate_deadline = this.onChangeDate_deadline.bind(this);
            this.onChangeRequired_skills = this.onChangeRequired_skills.bind(this);
                        this.onChangeJob_type = this.onChangeJob_type.bind(this);
            this.onChangeDuration = this.onChangeDuration.bind(this);
            this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
}

  onChangeTitle(event) {
    this.setState({ Title: event.target.value });
  }
    onChangeName_of_Recruiter(event) {
    this.setState({ Name_of_Recruiter: event.target.value });
  }
    onChangeEmail_of_Recruiter(event) {
    this.setState({ Email_of_Recruiter: event.target.value });
  }
    onChangeApplications_allowed(event) {
    this.setState({ Applications_allowed: event.target.value });
  }
    onChangePositions(event) {
    this.setState({ Positions: event.target.value });
  }
    onChangeDate_deadline(event) {
    this.setState({ Date_deadline: event.target.value });
  }
    onChangeRequired_skills(event) {
    this.setState({ Required_skills: event.target.value });
  }
     onChangeJob_type(event) {
    this.setState({ Job_type: event.target.value });
  }
    onChangeDuration(event) {
    this.setState({ Duration: event.target.value });
  }
    onChangeSalary(event) {
    this.setState({ Salary: event.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newJob = {
      Title: this.state.Title,
       Name_of_Recruiter: this.state.Name_of_Recruiter,
      Email_of_Recruiter: this.state.Email_of_Recruiter,
      Applications_allowed: this.state.Applications_allowed,
           Positions:this.state.Positions,
      Date_deadline:this.state.Date_deadline,
      Required_skills:this.state.Required_skills,
      Job_type:this.state.Job_type,
      Duration:this.state.Duration,
      Salary:this.state.Salary
    };
        axios.post("http://localhost:4000/job/add", newJob).then(res => {
      if (res.data === 1) alert("Try again");
      else alert("Job succesfully added!")
      console.log(res.data);

    });
                           localStorage.setItem("Emails", this.state.Email_of_Recruiter); 
 this.setState({
     	Title:"",
     Name_of_Recruiter:"",
     Email_of_Recruiter:"",
     Applications_allowed:"",
     Positions:"",
     Date_deadline:"",
     Required_skills:"",
     Job_type:"",
     Duration:"",
     Salary:""
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

                            <Nav.Link href="/profile">LOGOUT</Nav.Link>

        </Navbar>
        <br/>
           <h1>Add New Job</h1>
<Form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Job Title: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Title}
              onChange={this.onChangeTitle}
              required
              />
          </div>
       <div className="form-group">
            <label>Name of Recruiter: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.Name_of_Recruiter}
              onChange={this.onChangeName_of_Recruiter}
              required
              />
          </div>
<div className="form-group">
            <label>Email of Recruiter: </label>
            <input
              type="email"
              className="form-control"
              value={this.state.Email_of_Recruiter}
              onChange={this.onChangeEmail_of_Recruiter}
              required
              />
          </div>
          <div className="form-group">
            <label>Applications Allowed: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.Applications_allowed}
              onChange={this.onChangeApplications_allowed}
              required
              />
          </div>
          <div className="form-group">
            <label>Positions: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.Positions}
              onChange={this.onChangePositions}
              required
              />
          </div>
              <div className="form-group">
            <label>Application Deadline: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.Date_deadline}
              onChange={this.onChangeDate_deadline}
              required
              />
          </div>
             <div className="form-group">
            <label>Required Skills: </label>
            <input
              type="text"
             
              className="form-control"
              value={this.state.Required_skills}
              onChange={this.onChangeRequired_skills}
              required
              />
          </div>
             <div className="form-group">
            <label>Duration: </label>
            <input
              type="number"
             min="0"
             max="6"
              className="form-control"
              value={this.state.Duration}
              onChange={this.onChangeDuration}
              required
              />
          </div>
             <div className="form-group">
            <label>Salary: </label>
            <input
              type="number"
             
              className="form-control"
              value={this.state.Salary}
              onChange={this.onChangeSalary}
              required
              />
          </div>
             <div className="radio">
             <b>Job Type:</b>
             <br/>
             <br/>
      <label>
        <input type="radio" value="Part-Time" 
                      checked={this.state.Job_type === 'Part-Time'} 
                      onChange={this.onChangeJob_type} />
        Part-Time
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="Full-Time" 
                      checked={this.state.Job_type=== 'Full-Time'} 
                      onChange={this.onChangeJob_type} />
         Full-Time
      </label>
    </div>
<div className="radio">
      <label>
        <input type="radio" value="Work-From-Home" 
                      checked={this.state.Job_type=== 'Work-From-Home'} 
                      onChange={this.onChangeJob_type} />
         Full-Time
      </label>
    </div>
            <input type="submit" value="Add Job" className="btn btn-primary"/>
      
        </Form>

        </div>

        );
    }
}
        
       