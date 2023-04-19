import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import Home from './components/Common/Home'
import Registerapp from './components/Common/Registerapp'
import Navbar from './components/templates/Navbar'
import AppProfile from './components/Common/profile'
import reg from './components/Common/reg'
import Uploads from './components/Common/upload'
import Registerrec from './components/Common/Registerrec'
import Userhome from './components/Common/Userhome'
import Useredit from './components/Common/Edit'
import Profile from './components/Common/pro'
import RecProfile from './components/Common/recpro'
import RecHome from './components/Common/Rechome'
import EditRec from './components/Common/Editrec'
import AddJob from './Addjob'
import AddedJobs from './components/Common/Addedjobs'
import ViewJobs from './components/Common/Viewjobs'
import Applied from './components/Common/applied'


function App() {
  return (
    <Router>
                      <Navbar/>
      <div className="container">     

        <br/>
        <Route path="/" exact component={Home}/>
                <Route path="/upload" exact component={Uploads}/>
                <Route path="/userhome" exact component={Userhome}/>
                <Route path="/editapp" exact component={Useredit}/>

        <Route path="/register" component={reg}/>
        <Route path="/registeredapp" component={Registerapp}/>
        <Route path="/registeredrec" component={Registerrec}/>

        <Route path="/appprofile" component={AppProfile}/>
                <Route path="/profile" component={Profile}/>
                                <Route path="/recprofile" component={RecProfile}/>
                                <Route path="/rechome" component={RecHome}/>
                                <Route path="/editrec" component={EditRec}/>
                                <Route path="/addjob" component={AddJob}/>
                                <Route path="/viewjobs" component={ViewJobs}/>
                                <Route path="/applied" component={Applied}/>



      </div>
    </Router>
  );
}

export default App;
