import React, { useState, useRef } from "react";

// help manipulate the dom
function RefComponent() {
  const inputRef = useRef(null);

  const [text, setText] = useState("");
  const [name, setName] = useState("anon");

  const updateText = () => {
    setText(inputRef.current.value); // access element by reference
  };

  return (
    <div>
      <h1> use Ref </h1>
      <button
        onClick={() => {
          setName(text);
          inputRef.current.focus();
        }}
      >
        {" "}
        changeName{" "}
      </button>
      <br />
      <input type="text" onChange={updateText} value={text} ref={inputRef} />
      <p>{name}</p>
    </div>
  );
}

export default RefComponent;
