// Import required modules
const express = require("express");
const mysql = require("mysql");

// Create an Express app
const app = express();
const port = 3000;

// MySQL connection configuration
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "finaltheory",
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

// Function to generate dummy data for WeatherObservation table
const generateWeatherObservationData = () => {
  const dummyData = [];
  const cities = ["Islamabad", "Multan", "Lahore", "Sahiwal", "Karachi"];

  // Loop through each year
  for (let year = 2018; year <= 2023; year++) {
    // Loop through each month
    for (let month = 0; month < 12; month++) {
      // Get the number of days in the current month
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      // Loop through each day
      for (let day = 1; day <= daysInMonth; day++) {
        // Generate data for each city
        for (let city of cities) {
          const date = new Date(year, month, day);
          const temperature = Math.random() * 40; // Random temperature between 0 and 40 degrees Celsius
          const precipitation = Math.random() * 100; // Random precipitation between 0 and 100 mm
          const humidity = Math.random() * 100; // Random humidity between 0% and 100%
          const windSpeed = Math.random() * 50; // Random wind speed between 0 and 50 km/h

          dummyData.push([
            city,
            date,
            temperature,
            precipitation,
            humidity,
            windSpeed,
          ]);
        }
      }
    }
  }

  return dummyData;
};

// Function to generate random date between two dates
const getRandomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

// Function to generate dummy data for Location table
const generateLocationData = () => {
  const dummyData = [];
  const cities = ["Islamabad", "Multan", "Lahore", "Sahiwal", "Karachi"];
  const provinces = [
    "Punjab",
    "Sindh",
    "Khyber Pakhtunkhwa",
    "Balochistan",
    "Gilgit-Baltistan",
  ];

  for (let city of cities) {
    const province = provinces[Math.floor(Math.random() * provinces.length)];
    const country = "Pakistan"; // Assuming all locations are in Pakistan

    dummyData.push([city, province, country]);
  }

  return dummyData;
};

// Function to generate dummy data for Identification table
const generateIdentificationData = () => {
  const dummyData = [];
  const cities = ["Islamabad", "Multan", "Lahore", "Sahiwal", "Karachi"];

  for (let city of cities) {
    const lat = Math.random() * (30.1 - 24.8) + 24.8; // Random latitude between 24.8 and 30.1 (roughly covering Pakistan's range)
    const long = Math.random() * (70.8 - 66) + 66; // Random longitude between 66 and 70.8 (roughly covering Pakistan's range)

    dummyData.push([lat, long, city]);
  }

  return dummyData;
};

// Function to generate dummy data for Climate Trend table
const generateClimateTrendData = () => {
  const dummyData = [];
  const cities = ["Islamabad", "Multan", "Lahore", "Sahiwal", "Karachi"];
  const trendTypes = ["Positive", "Negative", "Neutral"];
  const trendDescriptions = [
    "Increasing temperature",
    "Decreasing precipitation",
    "Stable conditions",
  ];

  for (let city of cities) {
    const date = getRandomDate(new Date(2018, 0, 1), new Date(2024, 0, 1));
    const trendType = trendTypes[Math.floor(Math.random() * trendTypes.length)];
    const trendDescription =
      trendDescriptions[Math.floor(Math.random() * trendDescriptions.length)];

    dummyData.push([city, date, trendType, trendDescription]);
  }

  return dummyData;
};

// Function to generate dummy data for Environmental Policy table
const generateEnvironmentalPolicyData = () => {
  const dummyData = [];
  const policyDetails = [
    "Promoting renewable energy sources",
    "Implementing carbon emission reduction measures",
    "Protecting biodiversity",
  ];

  for (let i = 0; i < 100; i++) {
    // Adjust the number of records as needed
    const trendId = Math.floor(Math.random() * 5) + 1; // Assuming there are 5 climate trends in the Climate Trend table
    const policyDetail =
      policyDetails[Math.floor(Math.random() * policyDetails.length)];

    dummyData.push([trendId, policyDetail]);
  }

  return dummyData;
};

// Route to insert dummy data into WeatherObservation table
app.post("/insertWeatherObservationData", (req, res) => {
  const weatherObservationData = generateWeatherObservationData();

  // Insert dummy data into the WeatherObservation table
  const sql =
    "INSERT INTO WeatherObservation (CityName, Date, Temperature, Precipitation, Humidity, Wind_Speed) VALUES ?";
  db.query(sql, [weatherObservationData], (err, result) => {
    if (err) throw err;
    console.log(
      `${result.affectedRows} rows inserted into WeatherObservation table`
    );
    res.send(
      `${result.affectedRows} rows inserted into WeatherObservation table`
    );
  });
});

// Route to insert dummy data into Location table
app.post("/insertLocationData", (req, res) => {
  const locationData = generateLocationData();

  // Insert dummy data into the Location table
  const sql = "INSERT INTO Location (CityName, Province, Country) VALUES ?";
  db.query(sql, [locationData], (err, result) => {
    if (err) throw err;
    console.log(`${result.affectedRows} rows inserted into Location table`);
    res.send(`${result.affectedRows} rows inserted into Location table`);
  });
});

// Route to insert dummy data into Identification table
// Route to insert dummy data into Identification table
app.post("/insertIdentificationData", (req, res) => {
  const identificationData = generateIdentificationData();

  // Insert dummy data into the Identification table
  const sql = "INSERT INTO Identification (`Lat`, `Long`, `CityName`) VALUES ?"; // Enclose column names in backticks
  db.query(sql, [identificationData], (err, result) => {
    if (err) throw err;
    console.log(
      `${result.affectedRows} rows inserted into Identification table`
    );
    res.send(`${result.affectedRows} rows inserted into Identification table`);
  });
});

// Route to insert dummy data into Climate Trend table
app.post("/insertClimateTrendData", (req, res) => {
  const climateTrendData = generateClimateTrendData();

  // Insert dummy data into the Climate Trend table
  const sql =
    "INSERT INTO ClimateTrend (CityName, Date, Trend_Type, Trend_Description) VALUES ?";
  db.query(sql, [climateTrendData], (err, result) => {
    if (err) throw err;
    console.log(
      `${result.affectedRows} rows inserted into Climate Trend table`
    );
    res.send(`${result.affectedRows} rows inserted into Climate Trend table`);
  });
});

// Function to fetch climate trend data
const fetchClimateTrendData = () => {
  return new Promise((resolve, reject) => {
    // Query to fetch climate trend data from the ClimateTrend table
    const sql = "SELECT * FROM ClimateTrend";

    // Execute the query
    db.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

app.post("/insertEnvironmentalPolicyData", (req, res) => {
  // Assuming you have already fetched climate trend data and stored it in a variable
  fetchClimateTrendData()
    .then((climateTrendData) => {
      // Generate dummy data for Environmental Policy table
      const environmentalPolicyData = generateEnvironmentalPolicyData();

      // Insert dummy data into the Environmental Policy table
      const sql =
        "INSERT INTO EnvironmentalPolicy (Trend_Id, Policy_Detail) VALUES ?";
      db.query(sql, [environmentalPolicyData], (err, result) => {
        if (err) throw err;
        console.log(
          `${result.affectedRows} rows inserted into Environmental Policy table`
        );
        res.send(
          `${result.affectedRows} rows inserted into Environmental Policy table`
        );
      });
    })
    .catch((err) => {
      console.error("Error fetching climate trend data:", err);
      res.status(500).send("Error fetching climate trend data");
    });
});

// Function to start the server
const startServer = () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

// Start the server
startServer();
