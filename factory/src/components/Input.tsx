import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = (props: InputProps) => {
  const { type, label } = props;
  return (
    <div>
      <span>{label}</span>
      <input type={type} />
    </div>
  );
};

export default Input;
