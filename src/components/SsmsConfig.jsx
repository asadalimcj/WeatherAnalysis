// Import mssql library
const sql = require("mssql");

// Configuration object for connecting to SQL Server
const config = {
  user: "sa",
  password: "password",
  server: "DESKTOP-1L3GVR6", // Change this to your SQL Server instance
  database: "weather",
  options: {
    encrypt: false, // If you are using Azure SQL, set this to true
  },
};

// Function to connect to the SQL Server database
async function connectToDatabase() {
  try {
    // Create a new instance of the ConnectionPool class
    const pool = await sql.connect(config);
    console.log("Connected to the database ssms");

    // Return the connection pool for further use
    return pool;
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    throw error; // Throw the error to handle it further up in the call stack
  }
}

module.exports = connectToDatabase; // Export the function to be used in other files
