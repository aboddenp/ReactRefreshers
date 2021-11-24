import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

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
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        color="primary"
        size="small"
        sx={{ mb: 3 }}
        onClick={() => {
          setName(text);
          inputRef.current.focus();
        }}
      >
        {" "}
        changeName{" "}
      </Button>
      <br />
      <input type="text" onChange={updateText} value={text} ref={inputRef} />
      <p>{name}</p>
    </div>
  );
}

export default RefComponent;
