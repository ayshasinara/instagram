import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
function Navbar({ onchange }) {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    onchange(darkMode);
  }, [darkMode]);
  return (
    <div
      className="w-full lg:w-w-full xl:w-1/2"
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: 15,
        backgroundColor: darkMode ? "#373738" : "#cfcfcf",
        position: "fixed",
        bottom: 0,
        margin: "auto",
      }}
    >
      <AiFillHome size={30} onClick={() => navigate("/")} />
      <SlCalender size={30} onClick={() => navigate("/calender")} />
      {darkMode ? (
        <BsToggleOn size={30} onClick={() => setDarkMode(!darkMode)} />
      ) : (
        <BsToggleOff size={30} onClick={() => setDarkMode(!darkMode)} />
      )}
    </div>
  );
}

export default Navbar;
