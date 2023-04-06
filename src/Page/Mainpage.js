import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleUser from "../Components/SingleUser";
import Navbar from "../Components/Navbar";
function Mainpage() {
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "black" : "white";
  }, [darkMode]);
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=_IEadd9q1_dm3i6W6XBilvILgMwCZI7C4WhPrbdnJHs`
      )
      .then((res) => {
        setData(res.data);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
      }}
    >
      {data.map((e) => {
        console.log(e);
        return (
          <>
            <SingleUser userData={e} darkMode={darkMode} />
          </>
        );
      })}
      <Navbar onchange={(data) => setDarkMode(data)} />
    </div>
  );
}

export default Mainpage;
