import React from "react";
import { Helmet } from "react-helmet";

const FormButton = ({ properties, classname }) => {
  const content = properties.content;
  const className = classname;
  const defaultstyle = `
  .${className}{
    
  }`;

  return (
    <>
      <Helmet>
        <style>{defaultstyle}</style>
      </Helmet>
      <button className={className}>{content}</button>
    </>
  );
};

export default FormButton;
