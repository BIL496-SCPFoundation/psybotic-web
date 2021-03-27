import React from 'react';
import PropTypes from 'prop-types';



import '../../assets/css/doccard.css'


const propTypes = {
    user: PropTypes.object

}

const defaultProps = {
    user : null
}

const DoctorCard = ({
                         className,
                         ...props
                     }) => {




    return (
        <>
            <div className="doc-card">
                <div className="doc-avatar">
                    <img src={props.user.imageURL}/>
                </div>
                <div className="doc-title">
                    <h3>{props.user.firstName} {props.user.lastName}
                    </h3>
                    <h5>
                        {props.user.expertise}
                    </h5>
                </div>
                <div className="doc-description">
                    {props.user.biography}</div>
                <div className="doc-social">
                    <ul>
                        <li><i className="fab fa-facebook"/></li>
                        <li><i className="fab fa-twitter"/></li>
                        <li><i className="fab fa-github"/></li>
                        <li><i className="fab fa-dev"/></li>
                        <li><i className="fas fa-link"/></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

DoctorCard.propTypes = propTypes;
DoctorCard.defaultProps = defaultProps;

export default DoctorCard;
