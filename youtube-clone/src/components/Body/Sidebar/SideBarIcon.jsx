import React from "react";
import { sidebaricon } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

const SideBarIcon = () => {
  const navigate = useNavigate();

  const handleClik = (name) => {
    if (name == "Home") {
      navigate("/");
    } else if (name == "Shorts") {
      navigate("/shorts");
    }
    console.log("clecked");
  };
  return (
    <div className="ml-10  fixed ">
      {sidebaricon.map((e) => (
        <div
          key={e.name}
          className="my-6 hover:scale-110 transition duration-300 ease-in-out"
          // Corrected hover:scale- to hover:scale-110 to specify the scale factor
          onClick={() => handleClik(e.name)}
        >
          <h1 className="text-center ml-10">{e.icon}</h1>
          <h2
            className={`text-[12px] ${
              e.name === "Subscriptions" ? "pl-6" : "pl-9"
            }`}
          >
            {e.name}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default SideBarIcon;
