import React from "react";
import { UilTemperature, UilTear } from "@iconscout/react-unicons";
import SpecificButton from "./SpecificButton";
function AnalyezedValues(data) {
  const { avgHumid, avgTemp, avgWind, avgPrecp } = data.data;
  console.log(data);
  if (avgHumid && avgTemp) {
    return (
      <div>
        <div className="flex flex-col scroll-py-2 text-white my-10">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Avg Humid:
            <span className="font-medium ml-1">
              {`${avgHumid.toFixed()}%`};
            </span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Avg Temp:
            <span className="font-medium ml-1">
              {`${avgTemp.toFixed()}`}&deg;C
            </span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Avg Wind:
            <span className="font-medium ml-1">
              {`${avgWind.toFixed()}`} Km/h
            </span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Avg Precipitaion:
            <span className="font-medium ml-1">
              {`${avgPrecp.toFixed()}`}
            </span>
          </div>

          {/* <SpecificButton /> */}
          {/* <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind Speed:
            <span className="font-medium ml-1">{`${speed.toFixed()}`}&deg;</span>
          </div> */}
        </div>
      </div>
    );
  }
}

export default AnalyezedValues;
