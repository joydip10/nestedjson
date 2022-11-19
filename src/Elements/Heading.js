import parse from "html-react-parser";
import { Helmet } from "react-helmet";

const Heading = ({ properties, classname }) => {
  const tag = properties.titleType;
  const className = classname;
  const content = properties.content;

  const defaultstyle = `
  .${className}{
    
  }`;

  const jsx = parse(`<${tag} className=${className}>${content}</${tag}>`);

  return (
    <>
      <Helmet>{defaultstyle}</Helmet>
      {jsx}
    </>
  );
};

export default Heading;
