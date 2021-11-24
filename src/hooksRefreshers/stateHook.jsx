import React, { useState } from "react";

function StateComponent() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");

  const updateText = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1> state </h1>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}> increment </button>
      <br />
      <input type="text" onChange={updateText} value={text} />
      <p>
        {" "}
        <strong>You just said:</strong> {text}
      </p>
    </div>
  );
}

export default StateComponent;
