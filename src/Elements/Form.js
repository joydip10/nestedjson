import React from "react";
import Item from "./Item";
import { Helmet } from "react-helmet";
import FormButton from "./FormButton";

const Form = ({ properties, classname }) => {
  const items = properties?.fields.items;
  const className = classname[0];

  const button = properties?.submitButton;

  const defaultstyle = `
  .${className}{
    
  }`;
  return (
    <>
      <Helmet>{defaultstyle}</Helmet>
      <form className={className}>
        {items.map((item) => (
          <Item key={item?.id} properties={item} classname={classname[1]} />
        ))}
        <FormButton
          key={button?.content}
          properties={button}
          classname={classname[2]}
        />
      </form>
    </>
  );
};

export default Form;
