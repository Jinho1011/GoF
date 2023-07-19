import Input from "../../components/Input";
import EnglshInputFactory from "../input/EnglshInputFactory";
import InputForm from "./InputForm";

class USAInputForm extends InputForm {
  creatInput(type: "text" | "number") {
    const inputFactory = new EnglshInputFactory();

    if (type === "text") {
      return <Input type="text" inputFactory={inputFactory} />;
    } else if (type === "number") {
      return <Input type="number" inputFactory={inputFactory} />;
    } else {
      return <></>;
    }
  }
}

export default USAInputForm;
