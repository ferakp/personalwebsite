import "./App.css";
import { Menu } from "./components/Menu";
import React from "react";
import { getContext } from "./states/context";
import { appState } from "./states/states";

const AppContext = getContext();
class App extends React.Component {

  static contextType = AppContext;
  defaultContext;

  constructor(props) {
    super(props);
    this.state = {};
    this.defaultContext = { appState };
  }

  render() {
    return (
      <AppContext.Provider value={this.defaultContext}>
        <Menu />
      </AppContext.Provider>
    );
  }
}

export default App;
