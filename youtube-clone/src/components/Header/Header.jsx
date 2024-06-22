import { Dot, EllipsisVertical, Mic, Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col  mx-2 shadow-lg">
      <div className="flex col-span-1 align-middle">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADX19ewsLDFxcW2trbBwcELCwuWlpbz8/PZ2dnc3NxZWVlsbGzj4+Opqak0NDSfn5+FhYVhYWF9fX0mJiZRUVH39/dycnKOjo4WFhbs7OwdHR3Nzc1GRkZeN5/TAAABVElEQVR4nO3cCW7CMBAF0BB2SllLV0rvf8sGpB7BM+rkvQtEX5Zjx5Nx1wEAAAAAAAAAAAAAAAAAAEC0zdO0re17ar7pc9/carfPC7hun+9hkRXw0PeTCH0/zwl4XcUEHCIecybjKSrgMIjLlIS7sIST/pyS8C0w4UdKwpfAhJeUhJ+BCWcpCbdBi8UQ8OuakrA7h62Hh5yA95kYkHF4Rs6b9OEQsWf7zlkM/9wWs7YW09R8AAAAAP/Fft7YLbE+OlgeA87afhLPoi4B+e5OWQHXYWfeSWXufVzd4nWTknAdWHvKGcTI+qEacBv1x7D+PKz/Lq2/Ho5gTxO1L73lBRxsW39bzHO/LQAAAAD+i+r/6pfvtyjfMxPX95R0JFy/d61+/2H9HtL6NeD6vdz1+/Hr36lQ/16MEdxtMoL7abr6dwwBAAAAAAAAAAAAAAAAAAAwTr/LxSR1bBQKdAAAAABJRU5ErkJggg=="
          alt="hambburger"
          className="h-[70px] pt-5 pl-5"
        />
        <img
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          alt="youtube-logo"
          className="h-24 mix-blend-multiply mx-2  "
        />
      </div>
      {/* search box */}
      <div className="flex">
        <div className="col-span-11 w-[600px] border border-gray-500 h-10 rounded-l-full rounded-r-full bg-gray-100 mt-7 flex">
          <input
            type="text"
            className=" w-[520px] h-9 rounded-l-full pl-5 bg-gray-100  "
            placeholder="Search"
          />
          <Search className="ml-6 mt-1" size={29} strokeWidth={1} />
        </div>
        <div className="h-10 w-10 bg-gray-100 rounded-full mt-7 ml-2">
          <Mic className="mt-2 ml-2" />
        </div>
      </div>

      {/* user  */}
      <div className=" flex ml-20">
        <div className="mt-8 ml-10">
          <EllipsisVertical size={28} />
        </div>
        <div className="flex border border-black w-36 rounded-l-full rounded-r-full pt-1 h-10 mt-6 ml-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
            alt=""
            className="h-8 ml-2"
          />
          <span className="ml-2 font-semibold text-blue-700">Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
