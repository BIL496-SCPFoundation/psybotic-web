import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../../utils/SectionProps";
import PsychologistService from "../../../utils/data/axios/services/PsyService";
import { Button } from "react-bootstrap";
import DoctorCard from "../../elements/DoctorCard";
import { useHistory } from "react-router-dom";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

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
  const history = useHistory();
  const row = history.location.state.row;
  const [verifiedDocs, setVerifiedDocs] = useState(0);
  const [docs, setDocs] = useState([]);
  const psyService = new PsychologistService();
  useEffect(() => {
    console.log("your docs");
    console.log(docs);
    if (docs.length < 1) {
      psyService.confirmedApplicatns().then((res) => {
        setVerifiedDocs();
        let temp = res.data.map(function (doc) {
          return (
            <div className={"col-md-4 mt-10"}>
              <DoctorCard user={doc}></DoctorCard>
            </div>
          );
        });
        setDocs(temp);
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
        <div className={"col-md-12 row mt-10"}>{docs}</div>
      </div>
    </div>
  );
};

SelectPsychologist.propTypes = propTypes;
SelectPsychologist.defaultProps = defaultProps;

export default SelectPsychologist;
