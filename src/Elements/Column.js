import React from "react";
import { Helmet } from "react-helmet";

const Column = (props) => {
  const className = props.classname;
  const defaultstyle = `
  .${className}{
    
  }`;

  return (
    <div className={className}>
      <Helmet>{defaultstyle}</Helmet>
      {props.children}
    </div>
  );
};

export default Column;
