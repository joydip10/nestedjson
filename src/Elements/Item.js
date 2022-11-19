import React from "react";
import { Helmet } from "react-helmet";

const Item = ({ properties, classname }) => {
  const label = properties.label;
  const placeholder = properties.attr.placeholder;
  const className = classname;
  const defaultstyle = `
  .${className}{
    
  }`;

  return (
    <>
      <Helmet>{defaultstyle}</Helmet>
      <label>{label}</label>
      <input placeholder={placeholder} className={className} />
    </>
  );
};

export default Item;
