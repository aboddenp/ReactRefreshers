import { useContext } from "react";
import { AppContext } from "./ContextHook";

function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <>
      <input
        type="text"
        onChange={(event) => setUsername(event.target.value)}
      />
    </>
  );
}

export default Login;
