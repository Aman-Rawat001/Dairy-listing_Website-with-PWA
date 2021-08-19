import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "./components/HomePage";
import ViewDetails from "./components/ViewDetails/ViewDetails";

export default function App() {
  return (
    <>
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={ViewDetails} path="/:viewDetails" />
      </Switch>
    </>
  );
}
