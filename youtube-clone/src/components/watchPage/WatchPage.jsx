import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeWatchpage } from "../../Slices/sidebarSlice";
import { useNavigate } from "react-router-dom";
import Comments from "../commentsContainer/Comments";

const WatchPage = () => {
  const navigate = useNavigate();
  const id = useSelector((state) => state.videos.id);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set isWatchpageOpen to true when the component mounts
    dispatch(changeWatchpage(true));
    // Clean up: Reset the state when the component unmounts
    return () => {
      dispatch(changeWatchpage(false));
    };
  }, [dispatch]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="mt-5">
      {id == null ? (
        <h1>Loading.........</h1>
      ) : (
        <>
          <iframe
            width="1000"
            height="500"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <Comments />
        </>
      )}
    </div>
  );
};

export default WatchPage;
