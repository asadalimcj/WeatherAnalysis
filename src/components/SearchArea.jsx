import React from "react";
import DateInterval from "./DateInterval";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
function SearchArea() {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          placeholder="Search...."
          id="citySearch"
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>

      {/* CEL AND FARN */}
      <div className="flex flex-row w-1/4 text-center justify-center ">
        <button name="metric" className="text-xl text-white font-light">
          &deg;C
        </button>
        <p className="text-xl text-white mx-1 ">|</p>
        <button name="imperial" className="text-xl text-white font-light">
          &deg;F
        </button>
      </div>
    </div>
  );
}

export default SearchArea;
