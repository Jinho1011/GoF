import getInstance from "./singleton";

const singleton = getInstance();
singleton.setValue({ name: "what is in a name" });

const theNameObj = singleton.getValue();
console.log(theNameObj);
