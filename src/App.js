import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Temperature from "./components/Temperature";
import SearchArea from "./components/SearchArea";
import TopButtons from "./components/TopButtons";
import TimeAndLocation from "./components/TimeAndLocation";
import Forcast from "./components/Forcast";
import { useEffect, useState } from "react";
import getFormattedWeatherData from "./services/WeatherService";
import { data } from "autoprefixer";
import DateInterval from "./components/DateInterval";
import CitySelection from "./components/CitySelection";
import LineChartComponent from "./components/TempGraph";

import ReportBi from "./components/ReportBi";
// import getIntervalData from "./services/WeatherFunctions";

import { Result } from "postcss";
import {
  getIntervalData,
  getAnalyzedData,
  specificData,
} from "./services/WeatherFunctions";
import AnalyezedValues from "./components/AnalyezedValues";
import SpecificButton from "./components/SpecificButton";
import DataTable from "./components/DataTable";
function App() {
  const [query, setQuery] = useState({ q: "Lahore" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [startDay, setStartDay] = useState(null);
  const [startMonth, setStartMonth] = useState(null);
  const [startYear, setStartYear] = useState(null);
  const [endDay, setEndDay] = useState(null);
  const [endMonth, setEndMonth] = useState(null);
  const [endYear, setEndYear] = useState(null);
  const [city, setCity] = useState("");
  const [analyzedData, setanalyzedData] = useState({});
  const [column, setColumn] = useState({ col: "Temperature" });
  const [fetchedData, setFetchedData] = useState([{}]);
  const data = {
    city,
    startYear,
    startDay,
    startMonth,
    endDay,
    endMonth,
    endYear,
  };

  // Receiving data from specific interval of time
  const handleClickSubmit = async () => {
    try {
      const dt = await getIntervalData(data);
      dt.json().then((final) => {
        const dt = getAnalyzedData(final);
        setanalyzedData(dt);
        // console.log("AvgHumid", avgHumid, "AvgTemp", avgTemp);
        console.log("Final", final);
        setFetchedData(final);
      });
    } catch {
      console.warn("error in fetching data");
    }
  };

  // Four button handlinga
  const handleSpecificHandle = () => {
    const data = {
      column,
      startYear,
      startDay,
      startMonth,
      endDay,
      endMonth,
      endYear,
    };
    console.warn("Before Specific");
    specificData(data);
  };
  // useEffect(() => {});

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-xl mt-4 ppy-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <div className="justify-center text-center object-center">
        <TopButtons setQuery={setQuery} />
        {/* <SearchArea /> */}
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <Temperature weather={weather} />
            {/* <Forcast title={"hourly"} /> */}
            {/* <Forcast title={"daily"} /> */}
          </div>
        )}

        <div className="mt-10">
          <p className="flex items-center justify-around py-10 text-white text-xl font-medium">
            History Weather Data in Tabular Form
          </p>
          <DateInterval
            date={{
              str: "Start Date: ",
              day: startDay,
              month: startMonth,
              year: startYear,
            }}
            onChange={(day, month, year) => {
              setStartDay(day);
              setStartMonth(month);
              setStartYear(year);
            }}
          />
          <DateInterval
            date={{
              str: "End Date  : ",
              day: endDay,
              month: endMonth,
              year: endYear,
            }}
            onChange={(day, month, year) => {
              setEndDay(day);
              setEndMonth(month);
              setEndYear(year);
            }}
          />

          <CitySelection setCity={setCity} />
          {console.log(
            city,
            startYear,
            startDay,
            startMonth,
            endDay,
            endMonth,
            endYear
          )}
        </div>

        {/* Click Submit Button */}
        <div className="justify-center text-center object-center">
          <button
            className="text-white text-lg font-medium my-5"
            style={{ justifyContent: "center" }}
            onClick={handleClickSubmit}
          >
            Submit
          </button>
        </div>
        <LineChartComponent />

        {analyzedData && (
          <div>
            <AnalyezedValues data={analyzedData} />
            <DataTable data={fetchedData} />
          </div>
        )}
      </div>
      <p className="flex items-center justify-around py-10 text-white text-xl font-medium">
        Analysis of Interval Data in Graphical Form
      </p>
      <ReportBi />
    </div>
  );
}

export default App;
