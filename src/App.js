import "./App.css";
import React from "react";
import MainRouter from "./router/MainRouter";

function App() {
  return (
    <div className="xl:w-6/12" style={{ margin: "auto" }}>
      <MainRouter />
    </div>
  );
}

export default App;
