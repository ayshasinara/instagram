import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleUser from "../Components/SingleUser";
function Mainpage() {
  const [data, setData] = useState([]);
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
    <div>
      {data.map((e) => {
        console.log(e);
        return <SingleUser userData={e} />;
      })}
    </div>
  );
}

export default Mainpage;
