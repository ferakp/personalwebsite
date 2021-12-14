import React, { useReducer } from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { getContext } from "./states/context";
import { initialState, reducer } from "./states/state";
import { Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { useNavigate } from "react-router";
import "./App.css";

class App extends React.Component {
  static AppContext = getContext();

  render() {
    return (
      <App.AppContext.Provider value={{ app: this.props.state.app, dispatch: this.props.dispatch }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home {...this.props} />} />
          <Route path="projects" element={<Projects {...this.props} />} />
        </Routes>
      </App.AppContext.Provider>
    );
  }
}

const AppWrapper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let navigate = useNavigate();
  return <App navigate={navigate} state={state} dispatch={dispatch} />;
};

export default AppWrapper;
