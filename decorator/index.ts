class A {
  b: string = "Hello";

  get c(): string {
    return `${this.b} World!`;
  }

  @LogError("ㅎㅎㅎ")
  d(e: string): void {
    console.log(e);
    throw new Error();
  }
}

function LogError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function (e: string) {
      try {
        method(e);
      } catch (err) {
        console.log(errorMessage);
      }
    };
  };
}

new A().d("안녕!");
