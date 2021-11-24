import { useContext } from "react";
import { AppContext } from "./ContextHook";
function User() {
  const { username } = useContext(AppContext);
  return (
    <>
      <p> user: {username}</p>
    </>
  );
}

export default User;
