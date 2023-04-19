import React, {Component} from 'react';
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav";


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Register extends Component {


    constructor(props) {
        super(props);

        this.state = {
            Email: "",
            Skills: "",
            Name:"",
            Institution1_name:"",
            Start_year1:"",
            End_year1:"",
             Institution2_name:"",
            Start_year2:"",
            End_year2:"",
         
        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
                this.onChangeName= this.onChangeName.bind(this);
                this.onChangeSkills= this.onChangeSkills.bind(this);
                this.onChangeInstitution1_name= this.onChangeInstitution1_name.bind(this);
                this.onChangeStart_year1= this.onChangeStart_year1.bind(this);
                this.onChangeEnd_year1= this.onChangeEnd_year1.bind(this);

                this.onChangeInstitution2_name= this.onChangeInstitution2_name.bind(this);
                this.onChangeStart_year2= this.onChangeStart_year2.bind(this);
                this.onChangeEnd_year2= this.onChangeEnd_year2.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
                this.onSubmit1 = this.onSubmit1.bind(this);
                this.onSubmit2 = this.onSubmit2.bind(this);
                this.onSubmit3 = this.onSubmit3.bind(this);

    }
    
    onChangeEmail(event) {
        this.setState({ Email: event.target.value });
    }
 onChangeName(event) {
        this.setState({ Name: event.target.value });
    }
     onChangeSkills(event) {
        this.setState({ Skills: event.target.value });
    }
   
    onChangeInstitution1_name(event) {
        this.setState({ Institution1_name: event.target.value });
    } 
    onChangeStart_year1(event) {
        this.setState({ Start_year1: event.target.value });
    }   
      onChangeEnd_year1(event) {
        this.setState({ End_year1: event.target.value });
    }   
     onChangeInstitution2_name(event) {
        this.setState({ Institution2_name: event.target.value });
    } 
    onChangeStart_year2(event) {
        this.setState({ Start_year2: event.target.value });
    }   
      onChangeEnd_year2(event) {
        this.setState({ End_year2: event.target.value });
    }  
    onSubmit(e) {
        e.preventDefault();

        const newUser = {
                Email: localStorage.getItem("Email"),

            //Email: this.state.Email,
            Name: this.state.Name
            
            //date: Date.now()
        }
        axios.post('http://localhost:4000/user/update', newUser)
             .then(res => 
{                    alert("Name changed");
});

                 localStorage.setItem("Email", this.state.Email);      
      this.setState({
         
            Name:''
        
            //date:null
        });
    }
    onSubmit1(e) {
        e.preventDefault();

        const newUser = {
                          Email: localStorage.getItem("Email"),
            //Email: this.state.Email,
            Skills: this.state.Skills
            
            //date: Date.now()
        }
        axios.post('http://localhost:4000/user/update1', newUser)
             .then(res => 
{                    alert("Skills changed");
});
                 localStorage.setItem("Email", this.state.Email);      
        this.setState({
           // Email: '',
            Skills:''
        
            //date:null
        });
    }

        onSubmit2(e) {
        e.preventDefault();

        const newUser = {
                          Email: localStorage.getItem("Email"),
            //Email: this.state.Email,
            Institution1_name: this.state.Institution1_name,
            Start_year1: this.state.Start_year1,
            End_year1: this.state.End_year1
            
            //date: Date.now()
        }
        axios.post('http://localhost:4000/user/update2', newUser)
             .then(res => 
{                    alert("Institution-1 Details changed");
});
                 localStorage.setItem("Email", this.state.Email);      
        this.setState({
           // Email: '',
            Institution1_name:'',
            Start_year1:'',
            End_year1:''
        
            //date:null
        });
    }
          onSubmit3(e) {
        e.preventDefault();

        const newUser = {
                          Email: localStorage.getItem("Email"),
            //Email: this.state.Email,
            Institution2_name: this.state.Institution2_name,
            Start_year2: this.state.Start_year2,
            End_year2: this.state.End_year2
            
            //date: Date.now()
        }
        axios.post('http://localhost:4000/user/update3', newUser)
             .then(res => 
{                    alert("Institution-2 Details changed");
});
                 localStorage.setItem("Email", this.state.Email);      
        this.setState({
           // Email: '',
            Institution2_name:'',
            Start_year2:'',
            End_year2:''
        
            //date:null
        });
    }
      /** <div className="form-group">
                        <label>Email: </label>
                        <input type="email" 
                               className="form-control" 
                               value={this.state.Email}
                               onChange={this.onChangeEmail}
                               required
                               />  
                    </div> */
    render() {
        return (
          <div>
      <h2>Navigation Bar for User</h2>
          <Navbar bg="dark" variant="dark">
            <Nav.Link href="/Userhome">HOME</Nav.Link>

                            <Nav.Link href="/editapp">EDIT</Nav.Link>
                                                        <Nav.Link href="/viewjobs">View Jobs</Nav.Link>

                            <Nav.Link href="/">LOGOUT</Nav.Link>

        </Navbar>
            <h5 class="text-danger">*Please Logout and login again if changes do not reflect</h5>
            <br/>
                <form onSubmit={this.onSubmit}>
             
                  <h3> Change Name</h3>
                  
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
                  <br/>
                                     <h3> Change Skills</h3>

              
                    <div className="form-group">
                        <label>Skills: </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Skills}
                               onChange={this.onChangeSkills}
                               required
                               /> 
                               </div>
                           


                        <input type="submit" value="Submit" className="btn btn-primary"/>
                        </form>
                            <form onSubmit={this.onSubmit2}>
                  <br/>
                                     <h3> Change Institution1 Details</h3>

              
                    <div className="form-group">
                        <label>Institution1_name </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Institution1_name}
                               onChange={this.onChangeInstitution1_name}
                               required
                               /> 
                               </div>

                    <div className="form-group">
                        <label>Start_year1 </label>
                        <input type="number" 
                               className="form-control" 
                               value={this.state.Start_year1}
                               onChange={this.onChangeStart_year1}
                                                       required
                               /> 
                               </div>
                                <div className="form-group">
                        <label>End_year1 </label>
                        <input type="number" 
                               className="form-control" 
                               value={this.state.End_year1}
                               onChange={this.onChangeEnd_year1}
                                                       required
                               /> 
                               </div>
                               <input type="submit" value="Submit" className="btn btn-primary"/>
                        </form>
                            <form onSubmit={this.onSubmit3}>
                  <br/>

                                        <h3> Change Institution2 Details</h3>

              
                    <div className="form-group">
                        <label>Institution2_name </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Institution2_name}
                               onChange={this.onChangeInstitution2_name}
                               required
                               /> 
                               </div>

                    <div className="form-group">
                        <label>Start_year2 </label>
                        <input type="number" 
                               className="form-control" 
                               value={this.state.Start_year2}
                               onChange={this.onChangeStart_year2}
                                                       required
                               /> 
                               </div>
                                <div className="form-group">
                        <label>End_year2 </label>
                        <input type="number" 
                               className="form-control" 
                               value={this.state.End_year2}
                               onChange={this.onChangeEnd_year2}
                                                       required
                               /> 
                               </div>
                                
                           


                        <input type="submit" value="Submit" className="btn btn-primary"/>
                        </form>
            </div>
        )
    }
}
