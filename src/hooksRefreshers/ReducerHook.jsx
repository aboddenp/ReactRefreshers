import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

function ReducerComponent() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  const text = "boop bop beep";

  return (
    <div>
      <h1> Reducer </h1>
      <h2>{state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        increment and hide
      </button>
      <br />
      <p>
        <strong>secret hidden:</strong>
        {state.showText && text}
      </p>
    </div>
  );
}

export default ReducerComponent;
