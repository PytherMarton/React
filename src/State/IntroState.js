import { useState } from "react";

const IntroState = () => {
  const [persons, setPersons] = useState([
    { name: "Dan", age: 33 },
    { name: "Ben", age: 12 },
  ]);

  const greeting = (value) => {
    alert("Hello " + value);
  };
  return (
    <div>
      <Person name={persons[0].name} func={greeting} />
      <Person name={persons[1].name} func={greeting} />
    </div>
  );
};

const Person = (props) => {
  return (
    <div>
      <h1 onClick={() => props.func(props.name)}>{props.name}</h1>
    </div>
  );
};

export default IntroState;
