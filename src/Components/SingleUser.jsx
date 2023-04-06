import moment from "moment";
import React, { useEffect, useState } from "react";

function SingleUser({ userData, darkMode }) {
  const [date, setDate] = useState("");
  console.log(userData);
  useEffect(() => {
    setDate(moment(userData?.created_at).format("do MMMM"));
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "20px",
          justifyContent: "space-between",
          backgroundColor: darkMode ? "black" : "white",
        }}
      >
        <div className="imgbox" style={{ display: "flex" }}>
          <img
            src={userData?.user?.profile_image?.large}
            style={{ width: 50, height: 50, borderRadius: "50%" }}
          />
          <div className="userDetails" style={{ marginLeft: 20 }}>
            <div
              className="username"
              style={{
                textAlign: "start",
                color: darkMode ? "white" : "black",
              }}
            >
              {userData?.user?.username}
            </div>
            <div
              className="userplace"
              style={{ textAlign: "start", color: "gray" }}
            >
              {userData?.user?.location}
            </div>
          </div>
        </div>

        <div className="date" style={{ color: "gray" }}>
          {date}
        </div>
      </div>
      <div>
        <img
          style={{ width: "100%", objectFit: "contain" }}
          src={userData?.urls?.raw}
          alt=""
        />
      </div>
    </div>
  );
}

export default SingleUser;
