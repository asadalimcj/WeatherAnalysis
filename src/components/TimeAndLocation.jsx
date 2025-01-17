import React from "react";
import { formatToLocalTime } from "../services/WeatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
        <div className="font-medium text-white text-3xl">{`${name}, ${country}`}</div>
      </div>
    </div>
  );
}

export default TimeAndLocation;
