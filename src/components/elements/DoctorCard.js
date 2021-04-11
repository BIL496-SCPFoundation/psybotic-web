import React from "react";
import PropTypes from "prop-types";

import "../../assets/css/doccard.css";

const propTypes = {
  user: PropTypes.object,
};

const defaultProps = {
  user: null,
};

console.log(`your doctor informations `);
const DoctorCard = ({ className, ...props }) => {
  console.log("your doctor profile");
  console.log(props.user);
  return (
    <>
      <figure className="snip1336">
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
            {props.user.firstName} {props.user.lastName}{" "}
            <span>{props.user.titles}</span>
          </h2>
          <p>
            {props.user.biography && props.user.biography.length > 200 ? (
              <span>{props.user.biography.substring(0, 200)}...</span>
            ) : (
              <span>
                {props.user.biography == null
                  ? "biography not setted"
                  : props.user.biography}
              </span>
            )}
          </p>
          <a href="#" className="follow">
            Go Chat
          </a>
        </figcaption>
      </figure>
    </>
  );
};

DoctorCard.propTypes = propTypes;
DoctorCard.defaultProps = defaultProps;

export default DoctorCard;
