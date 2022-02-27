import React, { useReducer } from "react";
import { Home } from "./pages/Home";
import { Header } from "./components/header/Header";
import { getContext } from "./states/context";
import { initialState, reducer } from "./states/state";
import { Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Code } from "./pages/Code";
import { VolunteeringContributions } from "./pages/VolunteeringContributions";
import { AboutMe } from "./pages/AboutMe";
import { BlogsResearch } from "./pages/BlogsResearch";
import { useNavigate, useLocation } from "react-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from 'react-tooltip';
import "./App.css";

class App extends React.Component {
  static AppContext = getContext();

  render() {
    return (
      <App.AppContext.Provider value={{ app: this.props.state.app, dispatch: this.props.dispatch }}>
        <Header {...this.props} />
        <Routes>
          <Route path="/" element={<Home {...this.props} />} />
          <Route path="code" element={<Code {...this.props} />} />
          <Route path="projects" element={<Projects {...this.props} />} />
          <Route path="blogsresearch" element={<BlogsResearch {...this.props} />} />
          <Route path="volunteeringcontributions" element={<VolunteeringContributions {...this.props} />} />
          <Route path="aboutme" element={<AboutMe {...this.props} />} />
        </Routes>
        <ReactTooltip />
      </App.AppContext.Provider>
    );
  }
}

const AppWrapper = () => {
  library.add(fab);
  library.add(fas);
  const [state, dispatch] = useReducer(reducer, initialState);
  let navigate = useNavigate();
  let location = useLocation();
  return <App location={location} navigate={navigate} state={state} dispatch={dispatch} />;
};

export default AppWrapper;
