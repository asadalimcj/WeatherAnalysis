import React from "react";

import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/WeatherService";

function Temperature({
  weather: {
    details,
    feels_like,
    humidity,
    speed,
    sunset,
    sunrise,
    temp,
    temp_max,
    temp_min,
    icon,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{`${details}`}</p>
      </div>
      <div className="flex flex-row text-center justify-between text-white py-3">
        <img src={iconUrlFromCode(icon)} alt="HOT" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}`} &deg;</p>
        <div className="flex flex-col scroll-py-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Feels like:
            <span className="font-medium ml-1">
              {`${feels_like.toFixed()}`} &deg;C
            </span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()} %`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind Speed:
            <span className="font-medium ml-1">
              {`${speed.toFixed()}`} Km/h
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a'")}
          </span>
        </p>

        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a'")}
          </span>
        </p>

        <p className="font-light">|</p>

        <UilArrowUp />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">
            {`${temp_max.toFixed()}`}&deg;
          </span>
        </p>

        <p className="font-light">|</p>

        <UilArrowDown />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">
            {`${temp_min.toFixed()}`}&deg;
          </span>
        </p>
      </div>
    </div>
  );
}

export default Temperature;
