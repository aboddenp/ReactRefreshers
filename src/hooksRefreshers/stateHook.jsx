import React, { useState } from "react";

import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";

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
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        color="primary"
        size="small"
        sx={{ mb: 3 }}
        onClick={() => setCounter(counter + 1)}
      >
        {" "}
        increment{" "}
      </Button>
      <br />
      <TextField
        id="filled-basic"
        label="controlled"
        variant="filled"
        fullWidth
        onChange={updateText}
        value={text}
      />
      <p>
        {" "}
        <strong>You just said:</strong> {text}
      </p>
    </div>
  );
}

export default StateComponent;
