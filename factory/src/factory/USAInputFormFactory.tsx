import Input from "../components/Input";
import InputFormFactory from "./InputFormFactory";

class USAInputFormFactory extends InputFormFactory {
  createTextInput() {
    return (
      <Input label="name" type="text" placeholder={"type your name please"} />
    );
  }

  createNumberInput() {
    return (
      <Input label="phone number" type="number" placeholder={"xxx-xxx-xxxx"} />
    );
  }
}

export default USAInputFormFactory;
