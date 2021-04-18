import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup'
import { Form, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import PsychologistService from '../../utils/data/axios/services/PsyService'
import {useHistory} from 'react-router-dom';
import {Button, Dropdown} from "react-bootstrap";
import ArticleAdult from '../../components/elements/ArticleAdult'


const  LearnTopicAgeSelect = ({
                     
                      ...props
                  }) => {
                  
                    const history = useHistory();



    return (

      <>
<div className="col-md-12 row" style={{backgroundColor: "#25282C", minHeight:"60vh"}}>
<div className="col-md-6 offset-md-3" >
                            <h3>Please Select Your Age Range</h3>
                            <Button
                                onClick={(() => {
                                    history.push("/Article/Child")
                                })}
                                variant="dark" size="lg" block
                            >
                                Age: -17
                            </Button>
                            <Button
                                onClick={(() => {
                                    history.push("/Article/YoungAdult")
                                })}
                                variant="dark" size="lg" block
                            >
                                Age: 18 - 25
                            </Button>

                            <Button
                                onClick={(() => {
                                    history.push("/Article/Adult")
                                })}
                                variant="dark" size="lg" block
                            >
                                Age: 26 - 50
                            </Button>
                            
                            <Button
                                onClick={(() => {
                                    history.push("/Article/Old")
                                })}
                                variant="dark" size="lg" block
                            >
                                Age: +50
                            </Button>

        </div>
</div>
      
      </> 
    );
}


export default LearnTopicAgeSelect;
