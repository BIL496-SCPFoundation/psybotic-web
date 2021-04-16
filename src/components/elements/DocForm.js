import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import PsychologistService from '../../utils/data/axios/services/PsyService'
import {useHistory} from 'react-router-dom';


const propTypes = {
  user : PropTypes.object

}

const defaultProps = {
  user : null
}
;

const psyService = new PsychologistService();


const  DocForm= ({
                     
                      ...props
                  }) => {
                  
                    const history = useHistory();

                  const [firstName,setFirstName] = useState(0);
                  const [lastName,setLastName] = useState(0);
                  const [expertise,setExpertise] = useState(0);
                  const [aegofinterest,setAgeofinterest] = useState(0);
                  const [ageofinterestmin,setAgeOfInterestMin] = useState(0);
                  const [ageofinterestmax,setAgeOfInterestMax] = useState(0);
                  const [education,setEducation] = useState(0);
                  const [titles,setTitles] = useState(0);
                  const [biography,setBiography] = useState(0);
                  const [imageUrl,setImgUrl] = useState(0);
                  const [highschool,setHighschool] = useState(0);
                  const [university,setUniversity] = useState(0);
                  const [master,setMaster] = useState(0);

                 const   submitButton = function(){
                      psyService.insert({
                        firstName: firstName,
                        lastName: lastName,
                        expertise: expertise,
                        ageofinterest: ageofinterestmin + '-' + ageofinterestmax,
                        education: [ highschool ,university , master],
                        titles: [titles],
                        biography: biography,
                        imageURL: imageUrl
                      }).then((res) =>{
                        alert("Psychologist added successfully");
                        history.push("/MainMenu");
                      });
                  }


    return (

      <>

      <div style={{backgroundColor: "#25282C"}}>
  
        <div className="row col-md-12 mb-5">
         <div className="col-md-3">Name: </div>
         <div className="col-md-9">
           <input type="text" onChange={e => setFirstName(e.target.value)} className="form-control border-primary"></input>
         </div>
        </div>
  
        <div className="row col-md-12 mb-5">
         <div className="col-md-3">Lastname: </div>
         <div className="col-md-9">
           <input type="text" onChange={e => setLastName(e.target.value)} className="form-control border-primary"></input>
         </div>
        </div>
        
        <div className="row col-md-12 mb-5">
         <div className="col-md-3">Expertise on:</div>
         <div className="col-md-9">
           <input type="text" onChange={e => setExpertise(e.target.value)} className="form-control border-primary"></input>
         </div>
        </div>
        
        <div className="row col-md-12 mb-5">
         <div className="col-md-3">Age of interest: (selection)</div>
         <div className="col-md-4">
           <input type="text" onChange={e => setAgeofinterest(e.target.vale)} className="form-control border-primary" placeholder="Min Age."></input>
         </div> 
         <div className="col-md-4">
           <input type="text" onChange={e => setAgeofinterest(e.target.value)} className="form-control border-primary" placeholder="Max"></input>
         </div>
        </div>
        
        <div className="row col-md-12 mb-5">
         <div className="col-md-3">Education: </div>
         <div className="col-md-9">
         <div className="col-md-3">Highschool: </div>
         <div className="col-md-9">
           <input type="text" onChange={e => setHighschool(e.target.value)} className="form-control border-primary"></input>
         </div>
         <div className="col-md-3">University: </div>
         <div className="col-md-9">
           <input type="text" onChange={e => setUniversity(e.target.value)} className="form-control border-primary"></input>
         </div>
         <div className="col-md-3">Master: </div>
         <div className="col-md-9">
           <input type="text" onChange={e => setMaster(e.target.value)} className="form-control border-primary"></input>
         </div>           </div>
        </div>
        
        <div className="row col-md-12 mb-5">
         <div className="col-md-3">Title: </div>
         <div className="col-md-9">
           <input type="text" onChange={e => setTitles(e.target.value)} className="form-control border-primary"></input>
         </div>
        </div>
  
        
        <div className="row col-md-12 mb-5">
         <div className="col-md-3">Brief Bio: </div>
         <div className="col-md-9">
         <textarea id="w3review" onChange={e => setBiography(e.target.value)} name="w3review" rows="4"  className="form-control border-primary">
          </textarea>           
        </div>
        </div>
  
        
        <div className="row col-md-12 mb-5">
         <div className="col-md-3">Image Link:</div>
         <div className="col-md-9">
           <input type="text" onChange={e => setImgUrl(e.target.value)} className="form-control border-primary"></input>
         </div>
        </div>
  
        
        <div className="row col-md-12 mb-5">
         <div className="col-md-3">CV Upload </div>
         <div className="col-md-9">
           <input type="file" className="form-control border-primary"></input>
         </div>
        </div>
  
        <button className="btn btn-success form-control" onClick={submitButton}>Submit</button>
        </div>
      </> 
    );
}

DocForm.propTypes = propTypes;
DocForm.defaultProps = defaultProps;

export default DocForm;
