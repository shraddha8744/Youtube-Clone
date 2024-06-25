import axios from "axios";
import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_URL } from "../../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addvideos } from "../../../Slices/videoSlice";
import VideoCard from "./videoCard";
import Shimmer from "../../Shimmer";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videosData = useSelector((state) => state.videos.youtTubeVideos);
  // Assuming 'videos' is the slice name in your Redux store

  const getVideos = async () => {
    try {
      const response = await axios.get(YOUTUBE_VIDEOS_URL);
      const data = response.data.items;
      console.log(data);
      dispatch(addvideos(data)); // Dispatch action to add videos to Redux store
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return videosData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap justify-between pr-5">
      {videosData.map((e, index) => (
        <VideoCard info={e} key={index} />
      ))}
    </div>
  );
};

export default VideoContainer;
