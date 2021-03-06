import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';


const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/Mainmenu">
          <span>Psybotic</span>
        </Link>
      </h1>
    </div>
  );
}

export default Logo;
