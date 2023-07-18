import React from "react";
import KoreaInputFormFactory from "../factory/KoreaInputFormFactory";
import USAInputFormFactory from "../factory/USAInputFormFactory";

function createInputFormFactory(locale: "kor" | "en") {
  switch (locale) {
    case "kor":
      return new KoreaInputFormFactory();
    case "en":
      return new USAInputFormFactory();
    default:
      throw new Error("Unsupported locale");
  }
}

const InputForm = () => {
  const formFactory = createInputFormFactory("en");
  return (
    <form>
      <div>{formFactory.createTextInput()}</div>
      <div>{formFactory.createNumberInput()}</div>
    </form>
  );
};

export default InputForm;
