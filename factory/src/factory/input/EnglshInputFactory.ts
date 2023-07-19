import InputFactory from "./InputFactory";

class EnglshInputFactory implements InputFactory {
  createLabel(): string {
    return "name";
  }
  createPlaceholder(): string {
    return "type your name";
  }
  createBorderColor(): string {
    return "#e2e2e2";
  }
  createBorderRadius(): number {
    return 14;
  }
}

export default EnglshInputFactory;
