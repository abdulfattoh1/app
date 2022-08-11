import React from "react";
import "./main.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CategoryPage from "./components/pages/CategoryPage";

// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/category/:id" children={<CategoryPage />}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
