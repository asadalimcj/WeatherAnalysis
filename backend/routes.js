const express = require("express");
const router = express.Router();
const { getIntervalData } = require("../services/WeatherFunctions.js");

router.get("/intervalData", async (req, res) => {
  try {
    const intervalData = await getIntervalData(req.body.json());
    res.json(intervalData);
  } catch (err) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
