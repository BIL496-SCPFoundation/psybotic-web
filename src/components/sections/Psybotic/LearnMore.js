import React  from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';

import {Button} from "react-bootstrap";
import LearnTopicAgeSelect from "../../elements/LearnTopicAgeSelect";
import DocForm from "../../elements/DocForm";
import {useHistory} from "react-router-dom";

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const LearnMore = ({
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
                         <LearnTopicAgeSelect/>                                    
                 </div>
                </div>
            </div>
    );
}

LearnMore.propTypes = propTypes;
LearnMore.defaultProps = defaultProps;

export default LearnMore;
