import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Landing from "./pages/Landing/Index";
import View from "./pages/View/Index";
import ViewSingle from "./pages/ViewSingle/Index";
import Create from "./pages/Create/Index";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/view" exact component={View} />
        <Route path="/view/:id" component={ViewSingle} />
        <Route path="/create" component={Create} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
