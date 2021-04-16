import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import getUser from '../../utils/GetUser';



import '../../assets/css/profilecard.css'


const propTypes = {
    user : PropTypes.object

}

const defaultProps = {
    user : null
}

const defaultImageUrl = "https://images.wallpaperscraft.com/image/man_silhouette_night_barbed_wire_115312_1280x720.jpg";

const ProfileCard = ({
                         className,
                         ...props
                     }) => {

    const currentUser = getUser();


    const user = props.user;
    return (
        <>
            <div className="profile-container">
                <div className="profile-shape">
                    <img className={"profile-image"} src={currentUser.imageUrl ? currentUser.imageUrl : defaultImageUrl}
                         alt="User avatar"/>
                </div>
                <h3 className="title">
                    {currentUser.firstName}
                </h3>
                <h3 className="title">
                    {currentUser.lastName}
                </h3>
                <h5> "Daily Quote" </h5>
            </div>
        </>
    );
};

ProfileCard.propTypes = propTypes;
ProfileCard.defaultProps = defaultProps;

export default ProfileCard;
