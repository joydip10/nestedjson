import React from "react";
import parse from "html-react-parser";
import { Helmet } from "react-helmet";

const Text = ({ properties, classname }) => {
  const content = properties.content;
  const className = classname;
  const defaultstyle = `
  .${className}{
    
  }`;
  return (
    <>
      <Helmet>{defaultstyle}</Helmet>
      <p className={className}>{parse(content)}</p>
    </>
  );
};

export default Text;
