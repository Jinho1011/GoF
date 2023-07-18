import Input from "../components/Input";
import InputFormFactory from "./InputFormFactory";

class KoreaInputFormFactory extends InputFormFactory {
  createTextInput() {
    return <Input label="이름" type="text" placeholder={"이름을 입력하세요"} />;
  }

  createNumberInput() {
    return (
      <Input label="전화번호" type="number" placeholder={"010-xxxx-xxxx"} />
    );
  }
}

export default KoreaInputFormFactory;
