const express = require("express");
const mssql = require("mssql");
const con = require("./config.js");
const cors = require("cors");

const app = express();

// Apply cors middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

app.post("/api/intervalData", async (req, res) => {
  console.log("post request..");
  console.log("after request", req.body);
  const { city, startDay, startMonth, startYear, endDay, endMonth, endYear } =
    req.body;
  try {
    const startDate = new Date(startYear, startMonth, startDay);
    const endDate = new Date(endYear, endMonth, endDay);
    console.log("Date Started", startDate, endDate);
    const intervalData = await new Promise((resolve, reject) => {
      con.query(
        `SELECT Temperature, Humidity, Precipitation, WindSpeed 
        FROM historicalweatherview 
        WHERE CityName = '${city.city}' 
        AND Date BETWEEN '${startDate
          .toISOString()
          .slice(0, 10)}' AND '${endDate.toISOString().slice(0, 10)}'`,
        (err, intervalData) => {
          if (err) {
            console.log("Error View Data");
            reject(err);
          } // console.log("Fetch data", intervalData);
          resolve(intervalData);
        }
      );
    });
    res.json(intervalData);
  } catch (err) {
    console.warn("Error in getting Interval Data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/specific", async (req, res) => {
  const { column, startYear, startDay, startMonth, endDay, endMonth, endYear } =
    req.body;
  console.log("Enter Specific Api");
  try {
    const gotData = new Promise((rej, res) => {
      con.query(
        `Select ${column} from historicalweather where Year between ${startYear} And ${endYear} ANd Month Between ${startMonth} And ${endMonth} And Day Between ${startDay} And ${endDay}`,
        (err, specificData) => {
          if (err) rej(err);
          console.log("Fetched Specifice Data", specificData);
          res(specificData);
        }
      );
    });
    res.json(gotData);
  } catch (err) {
    console.warn("Error fetching specific data");
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
