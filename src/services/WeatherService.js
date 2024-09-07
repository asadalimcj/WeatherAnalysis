import { data } from "autoprefixer";
import { DateTime } from "luxon";
const API_KEY = "ae4fb9a5abbe2d68355658017a5b6851";
const BASE_URL = "https://api.openweathermap.org/data/";

const getweatherData = (infoType, middle, searchParams) => {
  const url = new URL(BASE_URL + middle + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log("Error fetching weather data:", error);
      // throw error;
    });
};

const doFormateCurrentWeather = (data) => {
  if (data) {
    const {
      coord: { lat, lon },
      main: { temp, feels_like, temp_min, temp_max, humidity },
      name,
      dt,
      sys: { country, sunrise, sunset },
      weather,
      wind: { speed },
    } = data;
    const { main: details, icon } = weather[0];
    return {
      lat,
      lon,
      temp,
      feels_like,
      temp_max,
      temp_min,
      humidity,
      name,
      dt,
      country,
      sunrise,
      sunset,
      speed,
      details,
      icon,
    };
  }
};

const doFormatForecast = (data) => {
  if (data.hourly && data.daily) {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(1, 6).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "ccc"),
        temp: d.temp.day,
        icon: d.weather[0].icon,
      };
    });
    hourly = hourly.slice(1, 6).map((d) => {
      return {
        title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
        temp: d.temp,
        icon: d.weather[0].icon,
      };
    });

    return { timezone, daily, hourly };
  }
  return null;
};

const getFormattedWeatherData = async (searchParams) => {
  try {
    const formatCurrentData = await getweatherData(
      "weather",
      "2.5/",
      searchParams
    ).then(doFormateCurrentWeather);

    console.log("current weather", formatCurrentData);

    return formatCurrentData;
  } catch (error) {
    console.error("Error getting formatted weather data:", error);
    throw error;
  }
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };
