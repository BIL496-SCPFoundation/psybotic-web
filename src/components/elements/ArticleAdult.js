import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ArticleService from "../../utils/data/axios/services/ArticleService";
import { Button } from "react-bootstrap";
import ArticleCard from "../../components/elements/ArticleCard";
import { useHistory } from "react-router-dom";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const ArticleAdult = ({
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

  const [articles, setArticles] = useState([]);
  const articleService = new ArticleService();
  useEffect(() => {

    if (articles.length < 1) {
      articleService.getAdultArticles().then((res) => {
        let temp = res.data.map(function (article) {
          return (
            <div className={"col-md-4 mt-10"}>
              <ArticleCard article={article}></ArticleCard>
            </div>
          );
        });
        setArticles(temp);
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
        <div className={"col-md-12 row mt-10"}>{articles}</div>
      </div>
    </div>
  );
};

ArticleAdult.propTypes = propTypes;
ArticleAdult.defaultProps = defaultProps;

export default ArticleAdult;
