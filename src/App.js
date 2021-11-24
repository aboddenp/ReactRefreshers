import ContextComponent from "./hooksRefreshers/ContextHook";
import EffectComponent from "./hooksRefreshers/EffectHook";
import LayoutEffectComponent from "./hooksRefreshers/LayoutEffectHook";
import ReducerComponent from "./hooksRefreshers/ReducerHook";
import RefComponent from "./hooksRefreshers/RefHook";
import StateComponent from "./hooksRefreshers/stateHook";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hook Refreshers</h1>
      <StateComponent />
      <ReducerComponent />
      <EffectComponent />
      <RefComponent />
      <LayoutEffectComponent />
      <ContextComponent />
    </div>
  );
}
