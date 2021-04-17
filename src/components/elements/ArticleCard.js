import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "../../assets/css/doccard.css";

const propTypes = {
  article: PropTypes.object,
  aligment: PropTypes.object,
};

const defaultProps = {
  article: null,
  aligment: "4",
};

const ArticleCard = ({ className, ...props }) => {
  const history = useHistory();

  return (
    <>
      <figure className={"snip1336 col-md-" + props.aligment}>
        <img
          src="https://wallup.net/wp-content/uploads/2017/11/10/303998-cup-coffee-pens-paper-wooden_surface-748x499.jpg"
          alt="sample87"
        />
        <figcaption>
          {props.article.imageUrl ? (
            <img
              src={props.article.imageUrl}
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
          {props.article.title}
            <span>  {!props.article.publisher ? "Unknown Publisher" : props.article.publisher }</span>
          </h2>
          

          <a  target="_blank" style={{width : "100% !important"}} href={props.article.url} className="follow full-width">Read more</a>
        
        </figcaption>
      </figure>
    </>
  );
};

ArticleCard.propTypes = propTypes;
ArticleCard.defaultProps = defaultProps;

export default ArticleCard;
