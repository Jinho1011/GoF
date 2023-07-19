import React from "react";
import USAInputForm from "../factory/form/USAInputForm";

const InputForm = () => {
  const form = new USAInputForm();
  return (
    <form>
      <div>{form.creatInput("text")}</div>
    </form>
  );
};

export default InputForm;
