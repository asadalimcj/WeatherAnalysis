import React, { useState, useEffect } from "react";

function DateInterval(props) {
  const { str, day, month, year } = props.date;
  const [selectedYear, setSelectedYear] = useState(year || "");
  const [selectedMonth, setSelectedMonth] = useState(month || "");
  const [selectedDay, setSelectedDay] = useState(day || "");
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      const days = new Date(selectedYear, selectedMonth, 0).getDate();
      const daysArray = Array.from({ length: days }, (_, index) => index + 1);
      setDaysInMonth(daysArray);
    }
  }, [selectedYear, selectedMonth]);

  // Inside DateInterval component
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    props.onChange(selectedDay, selectedMonth, e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    props.onChange(selectedDay, e.target.value, selectedYear);
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
    props.onChange(e.target.value, selectedMonth, selectedYear);
  };

  return (
    <div>
      <div className="flex flex-row my-2 justify-center justify-items-center">
        <p className="text-white text-med font-extralight w-30">{str}</p>

        <select
          value={selectedYear}
          onChange={handleYearChange}
          style={{ height: "30px", marginLeft: "20px" }}
        >
          <option disabled value="">
            Select Year
          </option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          {/* Add more years if needed */}
        </select>
        <select
          value={selectedMonth}
          onChange={handleMonthChange}
          style={{ height: "30px", marginLeft: "10px" }}
        >
          <option disabled value="">
            Select Month
          </option>
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select
          value={selectedDay}
          onChange={handleDayChange}
          style={{ height: "30px", marginLeft: "10px" }}
        >
          <option disabled value="">
            Select Day
          </option>
          {daysInMonth.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
        {/* <button onClick={handleSearch}>Search</button> */}
      </div>
    </div>
  );
}

export default DateInterval;
