const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "weather",
});

con.connect((err, res) => {
  if (err) throw err;
  console.log("Sql Connection Established Successfuly...");
});

module.exports = con;
