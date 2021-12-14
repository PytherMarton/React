import { useState } from "react";

const Calculator = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick = {() => setNum(num +1)}>Add one</button>
      <button onClick = {() => setNum(num -1)}>Subtract one</button>
    </div>
  );
};

export default Calculator;
