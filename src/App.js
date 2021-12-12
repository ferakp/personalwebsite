import React from "react";
import {Home} from "./pages/Home";
import { Header } from "./components/Header";
import { getContext } from "./states/context";
import { appState } from "./states/state";
import { Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { useNavigate } from "react-router";
import "./App.css";

class App extends React.Component {

  // Context properties
  static AppContext = getContext();
  static contextType;
  defaultContextValue = { appState };

  render() {
    return (
      <App.AppContext.Provider value={this.defaultContextValue}>
        <Header />
        <Routes>
          <Route path="/" element={<Home {...this.props}/>} />
          <Route path="projects" element={<Projects {...this.props}/>} />
        </Routes>
      </App.AppContext.Provider>
    );
  }
}

// Wrapper for navigate function
const AppWrapper = () => {
  let navigate = useNavigate();
  return (
    <App navigate={navigate}/>
  )
}

export default AppWrapper;
