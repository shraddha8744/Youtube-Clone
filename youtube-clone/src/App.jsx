import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/Body/Maincontainer/MainContainer";
import WatchPage from "./components/watchPage/WatchPage";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <div className="text-xl font-normal">
      {/* 
    head
     body
      sidebar
      menuItems
      mainContainer
        buttonList
        videoContainer
          videoCard
    
    */}
      <Header />
      <div className="pt-24">
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
};

export default App;
