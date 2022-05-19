import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SharedLayout from "./pages/SharedLayout"
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="/" element={<Profile />} />
      </Route>
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;