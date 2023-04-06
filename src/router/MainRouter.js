import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "../Page/Mainpage";
import Calender from "../Page/Calender";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/calender" element={<Calender />} />
    </Routes>
  );
}

export default MainRouter;
