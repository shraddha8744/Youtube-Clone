import React, { useEffect } from "react";
import Sidebar from "./Sidebar/Sidebar";
import SideBarIcon from "./Sidebar/SideBarIcon";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { changeWatchpage } from "../../Slices/sidebarSlice";

const Body = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector((state) => state.sideBar.isMenuOpen);
  const isWatching = useSelector((state) => state.sideBar.isWatchpageOpen);

  useEffect(() => {
    // This effect runs only once to set the initial state
    dispatch(changeWatchpage(false));
  }, [dispatch]);

  return (
    <div className="flex">
      {!isWatching && (sidebarStatus ? <Sidebar /> : <SideBarIcon />)}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
