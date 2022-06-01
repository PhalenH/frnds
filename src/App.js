import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from './pages/Login'
import Signup from './pages/Signup'
import SharedLayout from "./pages/SharedLayout"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  
    </BrowserRouter>
  );
}

export default App;