import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import PsychologistService from '../../utils/data/axios/services/PsyService'
import {Link, useHistory} from 'react-router-dom';





const propTypes = {
    user : PropTypes.object

}

const defaultProps = {
    user : null
}


class DocForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: '', lastName : '', expertise: '', ageofinterestmin: '',ageofinterestmax: '', highschool: '', university: '',master: '',title: '',bio: '',image: '',cv: ''};
    this.submitButton = this.submitButton.bind(this);
  }



  submitButton(){
      let psyService = new PsychologistService();
     //let historyP = useHistory();
      psyService.insert({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        expertise: this.state.expertise,
        ageofinterest: this.state.ageofinterestmin + '-' + this.state.ageofinterestmax,
        education: [ this.state.highschool , this.state.university , this.state.master],
        titles: [this.state.title],
        biography: this.state.bio,
        imageURL: this.state.image
      }).then((res) =>{
        console.log(res);
        var r = window.confirm("You successfully added psychologist , do you wanna redirect home page!");
        if (r == true) {
          //historyP.push("/Mainmenu")
        } 
        
      });
  }

render(){
  return (
    <>

    <div style={{backgroundColor: "#25282C"}}>

      <div className="row col-md-12 mb-5">
       <div className="col-md-3">Name: </div>
       <div className="col-md-9">
         <input type="text" onChange={e => this.setState({firstName : e.target.value})} className="form-control border-primary"></input>
       </div>
      </div>

      <div className="row col-md-12 mb-5">
       <div className="col-md-3">Lastname: </div>
       <div className="col-md-9">
         <input type="text" onChange={e => this.setState({lastname : e.target.value})} className="form-control border-primary"></input>
       </div>
      </div>
      
      <div className="row col-md-12 mb-5">
       <div className="col-md-3">Expertise on:</div>
       <div className="col-md-9">
         <input type="text" onChange={e => this.setState({expertise : e.target.value})} className="form-control border-primary"></input>
       </div>
      </div>
      
      <div className="row col-md-12 mb-5">
       <div className="col-md-3">Age of interest: (selection)</div>
       <div className="col-md-4">
         <input type="text" onChange={e => this.setState({ageofinterestmin : e.target.value})} className="form-control border-primary" placeholder="Min Age."></input>
       </div> 
       <div className="col-md-4">
         <input type="text" onChange={e => this.setState({ageofinterestmax : e.target.value})} className="form-control border-primary" placeholder="Max"></input>
       </div>
      </div>
      
      <div className="row col-md-12 mb-5">
       <div className="col-md-3">Education: </div>
       <div className="col-md-9">
       <div className="col-md-3">Highschool: </div>
       <div className="col-md-9">
         <input type="text" onChange={e => this.setState({highschool : e.target.value})} className="form-control border-primary"></input>
       </div>
       <div className="col-md-3">University: </div>
       <div className="col-md-9">
         <input type="text" onChange={e => this.setState({university : e.target.value})} className="form-control border-primary"></input>
       </div>
       <div className="col-md-3">Master: </div>
       <div className="col-md-9">
         <input type="text" onChange={e => this.setState({master : e.target.value})} className="form-control border-primary"></input>
       </div>           </div>
      </div>
      
      <div className="row col-md-12 mb-5">
       <div className="col-md-3">Title: </div>
       <div className="col-md-9">
         <input type="text" onChange={e => this.setState({title : e.target.value})} className="form-control border-primary"></input>
       </div>
      </div>

      
      <div className="row col-md-12 mb-5">
       <div className="col-md-3">Brief Bio: </div>
       <div className="col-md-9">
       <textarea id="w3review" onChange={e => this.setState({bio : e.target.value})} name="w3review" rows="4"  className="form-control border-primary">
        </textarea>           
      </div>
      </div>

      
      <div className="row col-md-12 mb-5">
       <div className="col-md-3">Image Link:</div>
       <div className="col-md-9">
         <input type="text" onChange={e => this.setState({image : e.target.value})} className="form-control border-primary"></input>
       </div>
      </div>

      
      <div className="row col-md-12 mb-5">
       <div className="col-md-3">CV Upload </div>
       <div className="col-md-9">
         <input type="file" className="form-control border-primary"></input>
       </div>
      </div>

      <button className="btn btn-success form-control" onClick={this.submitButton}>Submit</button>
      </div>
    </>
);
}
  
}
export default DocForm;