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
            Institution1_name:"",
            Start_year1:"",
            End_year1:"",
            Institution2_name:"",
            Start_year2:"",
            End_year2:"",
            Institution3_name:"",
            Start_year3:"",
            End_year3:"",
            Skills:""
            //date:null
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
                this.onChangePassword = this.onChangePassword.bind(this);
                this.onChangeInstitution1_name = this.onChangeInstitution1_name.bind(this);
                this.onChangeInstitution2_name = this.onChangeInstitution2_name.bind(this);
                this.onChangeInstitution3_name = this.onChangeInstitution3_name.bind(this);
                this.onChangestart_year1 = this.onChangestart_year1.bind(this);
                this.onChangestart_year2 = this.onChangestart_year2.bind(this);
                this.onChangestart_year3 = this.onChangestart_year3.bind(this);
                                this.onChangeend_year1 = this.onChangeend_year1.bind(this);
                                this.onChangeend_year2 = this.onChangeend_year2.bind(this);
                                this.onChangeend_year3 = this.onChangeend_year3.bind(this);
                              this.onChangeskills = this.onChangeskills.bind(this);


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
      onChangeInstitution1_name(event) {
        this.setState({ Institution1_name: event.target.value });
    }
     onChangestart_year1(event) {
        this.setState({ Start_year1: event.target.value });
    }
     onChangeend_year1(event) {
        this.setState({ End_year1: event.target.value });
    }
       onChangeInstitution2_name(event) {
        this.setState({ Institution2_name: event.target.value });
    }
     onChangestart_year2(event) {
        this.setState({ Start_year2: event.target.value });
    }
     onChangeend_year2(event) {
        this.setState({ End_year2: event.target.value });
    }
       onChangeInstitution3_name(event) {
        this.setState({ Institution3_name: event.target.value });
    }
     onChangestart_year3(event) {
        this.setState({ Start_year3: event.target.value });
    }
     onChangeend_year3(event) {
        this.setState({ End_year3: event.target.value });
    }
     onChangeskills(event) {
        this.setState({ Skills: event.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            Name: this.state.Name,
            Email: this.state.Email,
            Password: this.state.Password,
            Institution1_name:this.state.Institution1_name,
            Start_year1: this.state.Start_year1,
            End_year1:this.state.End_year1,
               Institution2_name:this.state.Institution2_name,
            Start_year2: this.state.Start_year2,
            End_year2:this.state.End_year2,
               Institution3_name:this.state.Institution3_name,
            Start_year3: this.state.Start_year3,
            End_year3:this.state.End_year3,
            Skills:this.state.Skills

            //date: Date.now()
        }
        axios.post('http://localhost:4000/user/login', newUser)

             .then(res => 

              {
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
              Institution1_name:"",
            Start_year1:"",
            End_year1:"",
            Institution2_name:"",
            Start_year2:"",
            End_year2:"",
            Institution3_name:"",
            Start_year3:"",
            End_year3:"",
            Skills:""
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
                        <label> Institution1_name</label>
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
                               onChange={this.onChangestart_year1}
                               required
                               />
                               </div>
                                      <div className="form-group">
                        <label>End_year1 </label>
                        <input type="number"
                               className="form-control" 
                               value={this.state.End_year1}
                               onChange={this.onChangeend_year1}
                               />
                               </div>
          <div className="form-group">
                        <label>Institution2_name </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Institution2_name}
                               onChange={this.onChangeInstitution2_name}
                               />
                               </div>
                                      <div className="form-group">
                        <label>Start_year2 </label>
                        <input type="number" 
                               className="form-control" 
                               value={this.state.Start_year2}
                               onChange={this.onChangestart_year2}
                               />
                               </div>
                                      <div className="form-group">
                        <label>End_year2</label>
                        <input type="number" 
                               className="form-control" 
                               value={this.state.End_year2}
                               onChange={this.onChangeend_year2}
                               />
                               </div>
                                         <div className="form-group">
                        <label>Institution3_name </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Institution3_name}
                               onChange={this.onChangeInstitution3_name}
                               />
                               </div>
                                      <div className="form-group">
                        <label>Start_year3 </label>
<input type="number" 
                               className="form-control" 
                               value={this.state.Start_year3}
                               onChange={this.onChangestart_year3}
                               />
                               </div>
                                      <div className="form-group">
                        <label>End_year3 </label>
                        <input type="number" 
                               className="form-control" 
                               value={this.state.End_year3}
                               onChange={this.onChangeend_year3}
                               />
                               </div>
                               
                                         <div className="form-group">
                        <label>Skills </label>
                        <input type="text" 
                               className="form-control" 
                               value={this.state.Skills}
                               onChange={this.onChangeskills}
                               />
                               </div>
    <div className="form-group">
                        <input type="submit" value="Register" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}