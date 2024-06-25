import React from "react";
import Button from "./Button";
import { buttonsName } from "../../../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-2 pt-4 ">
      {buttonsName.map((e) => (
        <Button key={e.name} name={e.name} />
      ))}
    </div>
  );
};

export default ButtonList;
