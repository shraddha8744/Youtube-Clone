import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import MainContainer from "./Maincontainer/MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
