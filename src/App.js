import React from "react";
import { Switch, withRouter } from "react-router-dom";

import "./App.css";

import { routesConfig } from "./components/routes/routes";
import { ProtectedRoute } from "./helpers/protectedRoute";

import Navigation from "./components/navbar/index";

function App() {
  const routeComponents = routesConfig.map(({ path, component }, i) => (
    <React.Fragment key={i}>
      <ProtectedRoute exact path={path} component={component} />
    </React.Fragment>
  ));

  return (
    <>
      <Navigation />
      <Switch>{routeComponents}</Switch>
    </>
  );
}

export default withRouter(App);
