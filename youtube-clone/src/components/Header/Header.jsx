// Header.js
import { EllipsisVertical, Mic, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSideBar } from "../../Slices/sidebarSlice";
import axios from "axios";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { cacheResults } from "../../Slices/searchSlice";

const Header = () => {
  const [searchquery, setSearchquery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setshowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const handleHamburgerClick = () => {
    dispatch(changeSideBar());
  };
  const searchCache = useSelector((state) => state.searchSlice);
  const handleSearchChange = (e) => {
    setSearchquery(e.target.value);
  };
  console.log(searchquery);

  const getSearchSuggestion = async () => {
    let response = await axios.get(YOUTUBE_SEARCH_API + searchquery);
    console.log(response.data[1]);
    console.log(searchquery);
    setSuggestion(response.data[1]);
    //updete cache
    dispatch(
      cacheResults({
        [searchquery]: response.data[1],
      })
    );
  };

  useEffect(() => {
    // make an api call after evry key press
    //but if the diffrence between 2 api calls is < 200ms
    //decline the Api call
    const timer = setTimeout(() => {
      if (searchCache[searchquery]) {
        setSuggestion(searchCache[searchquery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchquery]);
  return (
    <div className="grid grid-flow-col mx-2 shadow-lg fixed w-screen z-50 bg-white">
      <div className="flex col-span-1 align-middle">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADX19ewsLDFxcW2trbBwcELCwuWlpbz8/PZ2dnc3NxZWVlsbGzj4+Opqak0NDSfn5+FhYVhYWF9fX0mJiZRUVH39/dycnKOjo4WFhbs7OwdHR3Nzc1GRkZeN5/TAAABVElEQVR4nO3cCW7CMBAF0BB2SllLV0rvf8sGpB7BM+rkvQtEX5Zjx5Nx1wEAAAAAAAAAAAAAAAAAAEC0zdO0re17ar7pc9/carfPC7hun+9hkRXw0PeTCH0/zwl4XcUEHCIecybjKSrgMIjLlIS7sIST/pyS8C0w4UdKwpfAhJeUhJ+BCWcpCbdBi8UQ8OuakrA7h62Hh5yA95kYkHF4Rs6b9OEQsWf7zlkM/9wWs7YW09R8AAAAAP/Fft7YLbE+OlgeA87afhLPoi4B+e5OWQHXYWfeSWXufVzd4nWTknAdWHvKGcTI+qEacBv1x7D+PKz/Lq2/Ho5gTxO1L73lBRxsW39bzHO/LQAAAAD+i+r/6pfvtyjfMxPX95R0JFy/d61+/2H9HtL6NeD6vdz1+/Hr36lQ/16MEdxtMoL7abr6dwwBAAAAAAAAAAAAAAAAAAAwTr/LxSR1bBQKdAAAAABJRU5ErkJggg=="
          alt="hamburger"
          className="h-[70px] pt-5 pl-5 cursor-pointer"
          onClick={handleHamburgerClick}
        />
        <img
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="youtube-logo"
          className="h-24 mix-blend-multiply mx-2 cursor-pointer"
        />
      </div>
      {/* search box */}
      <div>
        <div className="flex">
          <div className="col-span-11 w-[600px] border border-gray-500 h-10 rounded-l-full rounded-r-full bg-gray-200 mt-7 flex">
            <input
              type="text"
              className="w-[510px] h-9 rounded-l-full pl-6 bg-white border-r-2 border-gray-400 outline-none ml-[1px] "
              placeholder="Search"
              value={searchquery}
              onChange={handleSearchChange}
              onFocus={() => setshowSuggestion(true)}
              onBlur={() => setshowSuggestion(false)}
            />
            <Search className="ml-6 mt-1" size={29} strokeWidth={1} />
          </div>
          <div className="h-10 w-10 bg-gray-100 rounded-full mt-7 ml-2">
            <Mic className="mt-2 ml-2 cursor-pointer" />
          </div>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white w-[510px]  py-2 px-6 rounded-lg shadow-lg">
            <ul>
              {suggestion.map((e) => {
                return (
                  <>
                    <li
                      className="flex gap-2  hover:bg-gray-100 hover:rounded-lg hover:cursor-pointer"
                      key={e}
                    >
                      <Search className="my-1" strokeWidth={1} />
                      {e}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {/* user  */}
      <div className="flex ml-20">
        <div className="mt-8 ml-10">
          <EllipsisVertical size={28} />
        </div>
        <div className="flex border border-black w-36 rounded-l-full rounded-r-full pt-1 h-10 mt-6 ml-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
            alt=""
            className="h-8 ml-2 cursor-pointer"
          />
          <span className="ml-2 font-semibold text-blue-700 cursor-pointer">
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
