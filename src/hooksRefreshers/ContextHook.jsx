import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function ContextComponent() {
  const [username, setUsername] = useState("default");

  return (
    <div>
      <h1>Context</h1>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
}

export default ContextComponent;
