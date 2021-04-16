import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../../utils/SectionProps";
import PsychologistService from "../../../utils/data/axios/services/PsyService";
import { Button } from "react-bootstrap";
import DoctorCardProfile from "../../elements/DoctorCardProfile";
import { useHistory, useParams } from "react-router-dom";
import "../../../assets/css/psyprofile.css";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const PsychologistProfile = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const history = useHistory();
  const [docs, setDocs] = useState([]);
  const [doc, setDoc] = useState(0);
  const psyService = new PsychologistService();
  const params = useParams();

  useEffect(() => {
    if (docs.length < 1) {
      psyService.confirmedApplicatns().then((res) => {
        res.data.forEach((doc) => {
          if (doc && doc.id && doc.id == params.id) {
            setDoc(doc);
            console.log("your doc founded");
            console.log(doc);
          }
        });
        setDocs(res.data);
      });
    }
  });

  const innerClasses = classNames(
    "hero-inner section-inner row col-md-12",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <div className="container ">
      <div className={innerClasses}>
        <div className="col-md-12 row">
          <DoctorCardProfile aligment={12} user={doc}></DoctorCardProfile>
        </div>
      </div>
    </div>
  );
};

PsychologistProfile.propTypes = propTypes;
PsychologistProfile.defaultProps = defaultProps;

export default PsychologistProfile;
