import { EllipsisVertical } from "lucide-react";
import React from "react";
import { flower_img } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { storeId } from "../../../Slices/videoSlice";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, id, statistics } = info;
  const { thumbnails, channelTitle } = snippet;
  const { viewCount } = statistics;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleclick = () => {
    console.log(id);
    dispatch(storeId(id));
    navigate("/watch");
  };
  return (
    <div className="w-[350px] mt-4 ml-10 shadow-lg">
      <img
        src={thumbnails.high.url}
        alt=""
        className="rounded-lg h-[200px] w-[400px]"
        height={400}
        onClick={handleclick}
      />
      <div className="flex  pt-2 justify-between">
        <div>
          <div className="h-10 w-10 bg-slate-200 rounded-full ">
            <img src={flower_img} alt="" className="rounded-full" />
          </div>
        </div>
        <p className="text-[16px] ml-3 font-semibold">
          The table below shows common use cases{" "}
        </p>
        <EllipsisVertical className="pl-1" />
      </div>
      <div className="ml-14">
        <p className="text-[14px]">{channelTitle}</p>
        <p className="text-[14px]">{viewCount} views 1 year ago</p>
      </div>
    </div>
  );
};

export default VideoCard;
