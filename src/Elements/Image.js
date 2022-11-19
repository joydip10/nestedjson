import React from "react";
import { Helmet } from "react-helmet";

const Image = ({ properties, classname }) => {
  const src = properties.attr.src;
  const alt = properties?.alt;
  const className = classname;
  const defaultstyle = `
  .${className}{
    
  }`;
  return (
    <>
      <Helmet>{defaultstyle}</Helmet>
      <img src={src} alt={alt} className={className} />
    </>
  );
};

export default Image;
