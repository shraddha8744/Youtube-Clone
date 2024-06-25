import {
  Bell,
  BookOpen,
  Clock,
  Film,
  FilmIcon,
  Gamepad,
  Home,
  Library,
  ListVideoIcon,
  Mic,
  Music,
  Newspaper,
  Settings,
  ShoppingBagIcon,
  TrendingUp,
  UserCircle,
  Video,
} from "lucide-react";
import React from "react";

export const sidebaricon = [
  {
    icon: <Home size={26} />,
    name: "Home",
  },
  {
    icon: <Film size={26} />,
    name: "Shorts",
  },
  {
    icon: <Bell size={26} />,
    name: "Subscriptions",
  },
  {
    icon: <Library size={26} />,
    name: "Library",
  },
  {
    icon: <Clock size={26} />,
    name: "History",
  },
];

export const sideBarMenu = [
  {
    icon: <Home />,
    name: "Home",
  },
  {
    icon: <Video />,
    name: "Shorts",
  },
  {
    icon: <Bell />,
    name: "Subscriptions",
    tag: "hr",
  },
  {
    icon: <UserCircle />,
    name: "You",
  },
  {
    icon: <Home />,
    name: "History",
    tag: "hr",
  },
  {
    name: "description",
    des: "Sign in to like videos, comment, and subscribe",
    people: <UserCircle size={25} color="blue" strokeWidth={1} />,
    button: "Sign in",
  },
  {
    tag: "hr",
  },
  {
    mainName: "Explore",
    icon: <TrendingUp />,
    name: "Trending",
  },
  {
    icon: <ShoppingBagIcon />,
    name: "Shopping",
  },
  {
    icon: <Music />,
    name: "Music",
  },
  {
    icon: <FilmIcon />,
    name: "Films",
  },
  {
    icon: <ListVideoIcon />,
    name: "Live",
  },
  {
    icon: <Gamepad />,
    name: "Gaming",
  },
  {
    icon: <Newspaper />,
    name: "News",
  },
  {
    icon: <Home />,
    name: "Sport",
  },
  {
    icon: <BookOpen />,
    name: "Courses",
  },
  {
    icon: <Home />,
    name: "Fashion & Beauty",
  },
  {
    icon: <Mic />,
    name: "Podcasts",
    tag: "hr",
  },
  {
    mainName: "More from YouTube",
    icon: <Home />,
    name: "YouTube",
  },
  {
    icon: <Bell />,
    name: "YouTube Premium",
  },
  {
    icon: <Home />,
    name: "YouTube Music",
  },
  {
    icon: <Home />,
    name: "YouTube Kids",
    tag: "hr",
  },
  {
    icon: <Settings />,
    name: "Settings",
  },
  {
    icon: <Bell />,
    name: "Send Feedback",
  },
];
export const buttonsName = [
  {
    name: "All",
  },
  {
    name: "Gaming",
  },
  {
    name: "Songs",
  },
  {
    name: "Live",
  },
  {
    name: "Cricket",
  },
  {
    name: "Soccer",
  },
  {
    name: "News",
  },
  {
    name: "cooking",
  },
  {
    name: "valentines",
  },
  {
    name: "T-series",
  },
  {
    name: "All",
  },

  // {
  //   name: "React-router",
  // },
  // {
  //   name: "Ramayan",
  // },
  // {
  //   name: "tarak mehata ka ulta chashma ",
  // },
  // {
  //   name: "arijit sing",
  // },
];
const Google_API_key = "AIzaSyDLbtdwqLKE7-t7bFeswmCUZ7vLQlo_H7A";

export const YOUTUBE_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${Google_API_key}`;
export const flower_img =
  "data:image/jpeg;base64,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";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
