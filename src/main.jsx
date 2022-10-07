import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router";
import Route from "./components/Route";
import Root from "./pages/Root";
import About from "./pages/About";
import "./index.css";

const container = document.getElementById("root");
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
