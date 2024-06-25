import React from "react";
import { sideBarMenu } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleClik = (name) => {
    if (name == "Home") {
      navigate("/");
    } else if (name == "Shorts") {
      navigate("/shorts");
    }
  };

  return (
    <div className="fixed left-4 top-26 w-[15%] shadow-lg h-[1000px] z-40 bg-white overflow-y-scroll">
      {sideBarMenu.map((e, index) => (
        <div key={index} className="pl-6 pt-2">
          {e.mainName && (
            <h1 className="font-bold text-lg mb-4">{e.mainName}</h1>
          )}
          <div
            className="flex items-center mb-4 hover:bg-gray-200 rounded-lg p-1 transition duration-300 ease-in-out cursor-pointer"
            onClick={() => handleClik(e.name)}
          >
            {e.icon && <span className="mr-4">{e.icon}</span>}
            {e.name !== "description" && (
              <span className="text-[16px] ml-2">{e.name}</span>
            )}
          </div>
          {e.tag === "hr" && (
            <div className="w-full my-4">
              <hr
                className="border-t border-gray-300"
                style={{ height: "2px" }}
              />
            </div>
          )}
          {e.name === "description" && (
            <div className="text-left mt-4">
              <p className="text-[17px]">{e.des}</p>
              <div className="flex mt-2 border border-gray-200 w-28 justify-center h-10 rounded-full">
                <span className="mr-2 mt-2">{e.people}</span>
                <span className="pt-[6px] text-[17px] font-semibold text-blue-700 cursor-pointer">
                  {e.button}
                </span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
