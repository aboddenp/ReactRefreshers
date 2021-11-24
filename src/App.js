import EffectComponent from "./hooksRefreshers/EffectHook";
import ReducerComponent from "./hooksRefreshers/ReducerHook";
import StateComponent from "./hooksRefreshers/stateHook";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hook Refreshers</h1>
      <StateComponent />
      <ReducerComponent />
      <EffectComponent />
      <h2> end </h2>
    </div>
  );
}
