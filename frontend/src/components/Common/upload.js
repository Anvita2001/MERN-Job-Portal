import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state ={
          file: null
      };
      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e)
{  
      e.preventDefault();
      const formData = new FormData();
      formData.append('myfile',this.state.file);
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };
      axios.post("http://localhost:4000/file/upload/",formData,config)
          .then((response) => {
              alert("The file is successfully uploaded");
          }).catch((error) => {
            throw error
      });
  }

  onChange(e) {
      this.setState({file:e.target.files});
  }

  render() {
      return (
          <form onSubmit={this.onFormSubmit}>
              <h1>File Upload</h1>
              <input type="file" className="custom-file-input" name="myImage" onChange= {this.onChange} />
              {console.log(this.state.file)}
              <button className="upload-button" type="submit">Upload to DB</button>
          </form>
      )
  }
}

export default App;