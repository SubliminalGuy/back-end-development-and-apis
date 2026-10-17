import express from "express";
const router = express.Router();

const SUPPORTED_CITIES = ["London", "Berlin", "Tokyo", "Sevilla"];

router.get("/", (req, res) => {
  res.status(200)
  res.json({cities: SUPPORTED_CITIES})
})

router.get("/:city", (req, res) => {
  const city = req.params.city;
  res.json({value: city})
})

export default router;