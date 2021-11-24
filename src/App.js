import ContextComponent from "./hooksRefreshers/ContextHook";
import EffectComponent from "./hooksRefreshers/EffectHook";
import LayoutEffectComponent from "./hooksRefreshers/LayoutEffectHook";
import ReducerComponent from "./hooksRefreshers/ReducerHook";
import RefComponent from "./hooksRefreshers/RefHook";
import AnchorIcon from "@mui/icons-material/Anchor";
import StateComponent from "./hooksRefreshers/stateHook";
import Paper from "@mui/material/Paper";
import "./styles.css";

export default function App() {
  const components = [
    <StateComponent />,
    <ReducerComponent />,
    <EffectComponent />,
    <RefComponent />,
    <LayoutEffectComponent />,
    <ContextComponent />
  ];
  return (
    <div className="App">
      <h1>Hook Refreshers</h1>
      <AnchorIcon sx={{ fontSize: 50 }} />
      {components.map((component, index) => {
        return (
          // replace index for an id
          <Paper elevation={4} sx={{ color: "white" }} key={index}>
            {component}
          </Paper>
        );
      })}
    </div>
  );
}
