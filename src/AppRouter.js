import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import CreatePage from "./pages/CreatePage";
import DeletePage from "./pages/DeletePage";
import ReadPage from "./pages/ReadPage";
import UpdatePage from "./pages/UpdatePage";

export const AppRouter = () => {
  return (
    <Router>
      <NavBar />

      <div className="container mt-4">
        <Switch>
          <Route exact path="./create" component={CreatePage} />
          <Route exact path="./read" component={ReadPage} />
          <Route exact path="./update" component={UpdatePage} />
          <Route exact path="./delete" component={DeletePage} />
          <Redirect to="./create" />
        </Switch>
      </div>
    </Router>
  );
};
