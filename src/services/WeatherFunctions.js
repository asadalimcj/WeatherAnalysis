const getIntervalData = async (data) => {
  const { city, startYear, startDay, startMonth, endDay, endMonth, endYear } =
    data;
  console.log("enter in getINterval", data);
  if (
    city &&
    startYear &&
    startDay &&
    startMonth &&
    endDay &&
    endMonth &&
    endYear
  ) {
    const result = await fetch("http://localhost:5000/api/intervalData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(result);
    return result;
  } else {
    console.warn("Impcomplete Attribute Selected");
  }

  console.log("Intervals", data);
};

const specificData = async (data) => {
  const result = await fetch("http://localhost:5000/api/specific", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(result);
  return result;
};

const getAnalyzedData = (data) => {
  let avgHumid = 0,
    avgTemp = 0,
    avgPrecp = 0,
    avgWind = 0;
  let count = 0;
  if (data) {
    console.log("ANalyeedfsjf; Data", data);
    data.forEach((item) => {
      avgHumid += item.Humidity;
      avgTemp += item.Temperature;
      avgWind += item.WindSpeed;
      avgPrecp += item.Precipitation;
      count++;
    });
    if (count !== 0) {
      avgPrecp = avgPrecp / count;
      avgWind = avgWind / count;
      avgHumid = avgHumid / count;
      avgTemp = avgTemp / count;
    }
  }
  return { avgHumid, avgTemp , avgWind, avgPrecp};
};

module.exports = { getIntervalData, getAnalyzedData, specificData };
