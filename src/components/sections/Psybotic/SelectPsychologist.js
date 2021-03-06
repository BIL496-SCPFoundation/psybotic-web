import React  from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';

import {Button} from "react-bootstrap";
import DoctorCard from "../../elements/DoctorCard";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const SelectPsychologist = ({
                      className,
                      topOuterDivider,
                      bottomOuterDivider,
                      topDivider,
                      bottomDivider,
                      hasBgColor,
                      invertColor,
                      ...props
                  }) => {




    const innerClasses = classNames(
        'hero-inner section-inner row col-md-12',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    return (

            <div className="container ">
                <div className={innerClasses}>
                 <div className={"col-md-12 row mt-10"}>
                     <div className="col-md-4" >
                         <DoctorCard/></div>
                     <div className="col-md-4" >
                         <DoctorCard/></div>
                     <div className="col-md-4" >
                         <DoctorCard/></div>


                 </div>

                    <div className={"col-md-12 row mt-5"}>
                        <div className="col-md-4" >
                            <DoctorCard/></div>
                        <div className="col-md-4" >
                            <DoctorCard/></div>
                        <div className="col-md-4" >
                            <DoctorCard/></div>


                    </div>


                </div>
            </div>
    );
}

SelectPsychologist.propTypes = propTypes;
SelectPsychologist.defaultProps = defaultProps;

export default SelectPsychologist;
