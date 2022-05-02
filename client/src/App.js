import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Router>
      <Header />

      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/me">
        <Profile />
      </Route>

      <Footer />
    </Router>
    </div>
  );
}

export default App;
