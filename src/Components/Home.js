import { Fragment, useEffect, useState } from "react";
import elements from "../Elements/Index";
import components from "./../Util/generator";
import Helmet from "react-helmet";

const Home = () => {
  const { classnameReferences, styleString } = components;
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  //helper function- to transform first letter of string to capital
  const capitalizeFirst = (styleString) => {
    return styleString.charAt(0).toUpperCase() + styleString.slice(1);
  };
  //helper function- to return element according to type
  const getElements = (type, properties, classname) => {
    let Element = elements[capitalizeFirst(type)];
    return <Element properties={properties} classname={classname} />;
  };

  // recurssion to automatically render react components
  const renderElements = (datum) => {
    if (Array.isArray(datum?.content)) {
      let Element = elements[capitalizeFirst(datum?.type)];
      return (
        <Element classname={classnameReferences[datum?.id]}>
          {renderElements(datum?.content)}
        </Element>
      );
    } else if (Array.isArray(datum)) {
      return datum.map((el) => renderElements(el));
    } else {
      if (datum?.form) {
        return getElements("Form", datum?.form, classnameReferences[datum?.id]);
      } else if (!datum?.form) {
        return getElements(datum?.type, datum, classnameReferences[datum?.id]);
      } else return;
    }
  };

  //----------------------- Function ends here-------------

  if (data) {
    return (
      <>
        <Helmet>
          {/* Style string came in obj  */}
          <style>{styleString.join("")}</style>
        </Helmet>
        {renderElements(data, elements, classnameReferences).map((el) => el)}
      </>
    );
  } else {
    return <h1 style={{ textAlign: "center", marginTop: "40px" }}>Error</h1>;
  }
};

export default Home;
