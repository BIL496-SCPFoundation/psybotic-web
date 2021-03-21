import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";



import '../../assets/css/docForm.css'


const propTypes = {
    user : PropTypes.object

}

const defaultProps = {
    user : null
}

const DocForm = ({
                    className,
                    ...props
                }) => {




    return (
        <>

        <div style={{backgroundColor: "#25282C"}}>

          <div className="row col-md-12 mb-5">
           <div className="col-md-3">Name: </div>
           <div className="col-md-9">
             <input type="text" className="form-control border-primary"></input>
           </div>
          </div>

          <div className="row col-md-12 mb-5">
           <div className="col-md-3">Lastname: </div>
           <div className="col-md-9">
             <input type="text" className="form-control border-primary"></input>
           </div>
          </div>
          
          <div className="row col-md-12 mb-5">
           <div className="col-md-3">Expertise on:</div>
           <div className="col-md-9">
             <input type="text" className="form-control border-primary"></input>
           </div>
          </div>
          
          <div className="row col-md-12 mb-5">
           <div className="col-md-3">Age of interest: (selection)</div>
           <div className="col-md-4">
             <input type="text" className="form-control border-primary" placeholder="Min Age."></input>
           </div> 
           <div className="col-md-4">
             <input type="text" className="form-control border-primary" placeholder="Max"></input>
           </div>
          </div>
          
          <div className="row col-md-12 mb-5">
           <div className="col-md-3">Education: </div>
           <div className="col-md-9">
           <div className="col-md-3">Highschool: </div>
           <div className="col-md-9">
             <input type="text" className="form-control border-primary"></input>
           </div>
           <div className="col-md-3">University: </div>
           <div className="col-md-9">
             <input type="text" className="form-control border-primary"></input>
           </div>
           <div className="col-md-3">Master: </div>
           <div className="col-md-9">
             <input type="text" className="form-control border-primary"></input>
           </div>           </div>
          </div>
          
          <div className="row col-md-12 mb-5">
           <div className="col-md-3">Title: </div>
           <div className="col-md-9">
             <input type="text" className="form-control border-primary"></input>
           </div>
          </div>

          
          <div className="row col-md-12 mb-5">
           <div className="col-md-3">Brief Bio: </div>
           <div className="col-md-9">
           <textarea id="w3review" name="w3review" rows="4"  className="form-control border-primary">
            </textarea>           
          </div>
          </div>

          
          <div className="row col-md-12 mb-5">
           <div className="col-md-3">Image Link:</div>
           <div className="col-md-9">
             <input type="text" className="form-control border-primary"></input>
           </div>
          </div>

          
          <div className="row col-md-12 mb-5">
           <div className="col-md-3">CV Upload </div>
           <div className="col-md-9">
             <input type="file" className="form-control border-primary"></input>
           </div>
          </div>

          <button className="btn btn-success form-control">Submit</button>
          </div>
        </>
    );
}



DocForm.propTypes = propTypes;
DocForm.defaultProps = defaultProps;

export default DocForm;
