import React  from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';

import {Button} from "react-bootstrap";
import DoctorCard from "../../elements/DoctorCard";
import DocForm from "../../elements/DocForm";
import {useHistory} from "react-router-dom";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const ApplyPsy = ({
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
                         <DocForm/>                                    
                 </div>
                </div>
            </div>
    );
}

ApplyPsy.propTypes = propTypes;
ApplyPsy.defaultProps = defaultProps;

export default ApplyPsy;
