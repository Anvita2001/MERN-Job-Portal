import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Register from './Register'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  return (
    <div className="App container">
          <br/>
<p>Please Select the type of user</p>
      <DropdownButton
      alignRight
      title="Select User"
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
        >
  
              <Dropdown.Item >
              <Link to="/appprofile">Job Applicant
              </Link>
              </Dropdown.Item>
              <Dropdown.Item >
               <Link to="/recprofile">Recruiter
              </Link></Dropdown.Item>
            
      </DropdownButton>
   

    </div>
  );
}

export default App;