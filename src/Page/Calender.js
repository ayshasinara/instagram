import React, { useState } from "react";
import Navbar from "../Components/Navbar";

function Calender() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Navbar onchange={(data) => setDarkMode(data)} />
    </div>
  );
}

export default Calender;
