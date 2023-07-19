import React from "react";
import InputFactory from "../factory/input/InputFactory";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputFactory: InputFactory;
}

const Input = (props: InputProps) => {
  const { type, inputFactory } = props;
  return (
    <div
      style={{
        borderColor: inputFactory.createBorderColor(),
        borderRadius: inputFactory.createBorderRadius(),
        borderWidth: 2,
        borderStyle: "solid",
      }}
    >
      <span>{inputFactory.createLabel()}</span>
      <input type={type} placeholder={inputFactory.createPlaceholder()} />
    </div>
  );
};

export default Input;
