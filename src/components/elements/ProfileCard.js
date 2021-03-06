import React from 'react';
import PropTypes from 'prop-types';



import '../../assets/css/profilecard.css'


const propTypes = {
    user : PropTypes.object

}

const defaultProps = {
    user : null
}

const ProfileCard = ({
                    className,
                    ...props
                }) => {




    return (
        <>
            <div className="profile-container">
                <div className="profile-shape">
                    <div className="profile-image"/>
                </div>
                <h3 className="title">
                    {props.user.firstName}
                </h3>
                <h3 className="title">
                    {props.user.lastName}
                </h3>
                <h3 className="title">
                    {props.user.city}
                </h3>
                <h5> "Daily Quote" </h5>

            </div>
        </>
    );
}

ProfileCard.propTypes = propTypes;
ProfileCard.defaultProps = defaultProps;

export default ProfileCard;
