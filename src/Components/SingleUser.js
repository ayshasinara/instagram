import moment from "moment";
import React, { useEffect, useState } from "react";

function SingleUser({ userData }) {
  const [date, setDate] = useState("");
  console.log(userData);
  useEffect(() => {
    setDate(moment(userData?.user?.updated_at).format("DD-MM-YYYY"));
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "20px",
          justifyContent: "space-between",
        }}
      >
        <div className="imgbox" style={{ display: "flex" }}>
          <img
            src={userData?.user?.profile_image?.large}
            style={{ width: 50, height: 50, borderRadius: "50%" }}
          />
          <div className="userDetails" style={{ marginLeft: 20 }}>
            <div className="username" style={{ textAlign: "start" }}>
              {userData?.user?.username}
            </div>
            <div className="userplace" style={{ textAlign: "start" }}>
              {userData?.user?.location}
            </div>
          </div>
        </div>

        <div className="date">{date}</div>
      </div>
      <div>
        <img
          style={{ width: "100%", objectFit: "contain" }}
          src={userData?.urls?.full}
        />
      </div>
    </div>
  );
}

export default SingleUser;
