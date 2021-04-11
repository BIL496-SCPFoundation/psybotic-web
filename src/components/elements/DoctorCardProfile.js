import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "../../assets/css/doccard.css";

const propTypes = {
  user: PropTypes.object,
  aligment: PropTypes.object,
};

const defaultProps = {
  user: null,
  aligment: "4",
};

console.log(`your doctor informations `);
const DoctorCardProfile = ({ className, ...props }) => {
  const history = useHistory();

  return (
    <>
      <figure className={"snip1336 col-md-" + props.aligment}>
        <img
          src="https://www.lawsonpsychology.com.au/wp-content/uploads/2019/02/Lawson_Blog_017-2-01.png"
          alt="sample87"
        />
        <figcaption>
          {props.user.imageURL ? (
            <img
              src={props.user.imageURL}
              alt="profile-sample4"
              className="profile"
            />
          ) : (
            <img
              src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png"
              alt="profile-sample4"
              className="profile"
            />
          )}

          <h2>
            Name : {props.user.firstName} {props.user.lastName}{" "}
            <span>Titles : {props.user.titles}</span>
            <span>
              Create Time : {new Date(props.user.createdDate).getDay()}-
              {new Date(props.user.createdDate).getMonth()}-
              {new Date(props.user.createdDate).getFullYear()}
            </span>
            <span>Experties :  {props.user.expertise}</span>
          </h2>
          <span>Biography</span>
          <p>
            {props.user.biography
              ? props.user.biography
              : "biography not setted"}
          </p>
          <a className="follow full-width" onClick={()=> {
            history.push("/Chat/Psychologist/"+props.user.id);
          }}>Go Chat</a>
        </figcaption>
      </figure>
    </>
  );
};

DoctorCardProfile.propTypes = propTypes;
DoctorCardProfile.defaultProps = defaultProps;

export default DoctorCardProfile;
