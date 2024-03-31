import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Clubs from './Clubs';
import Login from './different_pages/login';
import SignUp from "./different_pages/SignUp";
import Body from "./Body";
import News from "./Component/News";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/news" element={<News/>} /> {/* Added News route */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
