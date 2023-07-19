interface InputFactory {
  createLabel(): string;
  createPlaceholder(): string;
  createBorderColor(): string;
  createBorderRadius(): number;
}

export default InputFactory;
