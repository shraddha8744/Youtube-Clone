import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const sideBar = useSelector((state) => state.sideBar.isMenuOpen);
  return (
    <div>
      <div className={`${sideBar ? "ml-[300px]" : "ml-24"}`}>
        <ButtonList />
      </div>
      <div className={`${sideBar ? "ml-[270px]" : "ml-48"}`}>
        {" "}
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
