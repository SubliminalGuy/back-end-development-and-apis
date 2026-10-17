import express from "express";
import weather from "./weather.js";

const router = weather

const app = express();
const PORT = 3000;

app.use('/api/weather', router)

app.get('/', (req, res) => {
  res.status(200)
  res.send("hello")
})

app.get('/api/status', (req, res) => {
  res.status(200)
  res.json({
    status: "operational"
  })
})

app.get('/api/info', (req, res) => {
  res.status(200)
  res.json({
    name: "Weather Service"
  })
})

app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name
  res.json({
    message: `Hi ${name}`
  })
})

app.get('/docs', (req, res) => {
  res.redirect("/api/info")
})

app.route('/api/data')
  .get((req, res) => {
    res.json({})
  })
  .post((req,res) => {
    res.status(201)
    res.json({})
  })




app.listen(PORT, () => {})