import { TextField } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "./ContextHook";

function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <>
      <TextField
        id="filled-basic"
        label="controlled"
        variant="filled"
        fullWidth
        onChange={(event) => setUsername(event.target.value)}
      />
    </>
  );
}

export default Login;
