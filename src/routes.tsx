import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Landing from "./pages/Landing/Index";
import View from "./pages/View/Index";
import ViewSingle from "./pages/ViewSingle/Index";
import Create from "./pages/Create/Index";
import Edit from "./pages/Edit/Index";
import NotFound from "./pages/NotFound/Index";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/view" exact component={View} />
        <Route path="/view/:id" exact component={ViewSingle} />
        <Route path="/view/:id/edit" exact component={Edit} />
        <Route path="/create" exatct component={Create} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
