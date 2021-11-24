import { TextField } from "@mui/material";
import React, { useEffect, useLayoutEffect, useRef } from "react";

function LayoutEffectComponent() {
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.value = "dog";
  }, []);

  useLayoutEffect(() => {
    // change the layout of the site before the render
    textareaRef.current.value = "bob";
  }, []);

  return (
    <div>
      <h1>use layout effect</h1>
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        onChange={() => {}}
        ref={textareaRef}
        value="Anon"
      />
    </div>
  );
}

export default LayoutEffectComponent;
