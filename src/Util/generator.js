var classnameReferences = {};
var styleString = [];

//helper functions

// Generates styles for non form components
function getStyles(styleStringLiteral, styleObj, styleid) {
  if (!styleObj) return;
  let stylestuffs = [];
  let styleliteral = (key, value) => `${key}:${value};`;

  for (let j in styleObj) {
    stylestuffs.push(
      styleliteral(
        j.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        styleObj[j]
      )
    );
  }
  stylestuffs = stylestuffs.join(" ");

  stylestuffs = `.${styleStringLiteral}{${stylestuffs}}\n`;

  classnameReferences[styleid] = styleStringLiteral;

  return stylestuffs;
}

// Generates styles for form components
function getFormStyle(formObj) {
  const formstyle = formObj.form?.style;
  const itemstyle = formObj.form?.fields?.style;
  const subbtnstyle = formObj.form?.submitButton?.style;

  const formliteral = `Form${formObj?.id}${
    ("" + Math.random() * 1000).split(".")[0]
  }`;
  const itemliteral = `Item${("" + Math.random() * 1000).split(".")[0]}`;
  const subbtnliteral = `Btn${("" + Math.random() * 1000).split(".")[0]}`;

  styleString.push(getStyles(formliteral, formstyle));
  styleString.push(getStyles(itemliteral, itemstyle));
  styleString.push(getStyles(subbtnliteral, subbtnstyle));

  classnameReferences[formObj?.id] = [formliteral, itemliteral, subbtnliteral];
}

//generateGlobalStyle to generate styles and classname referenced Objects
function generateGlobalStyle(sth) {
  if (sth?.style && !sth?.form) {
    styleString.push(
      getStyles(sth?.type + sth?.id, sth?.style, sth?.id).replaceAll('"', "'")
    );
  } else {
    getFormStyle(sth);
  }
  if (Array.isArray(sth?.content)) {
    return generateGlobalStyle(sth?.content);
  }
  if (Array.isArray(sth)) {
    sth.map((e) => generateGlobalStyle(e));
  }
  return;
}

fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    generateGlobalStyle(data);
  });

//components to send style styleStringings bundled all together, classname referenced Objects and the generateGlobalStyle function
const components = { classnameReferences, styleString };

export default components;
