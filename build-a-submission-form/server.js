import express from "express";
import apiRouter from "./routes/api.routes.js";
import { notFoundHandler, finalErrorHandler } from "./middleware/error.middleware.js";  
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url); // Logs the HTTP method and URL of each request
  next(); // Passes control to the next middleware
})

app.use(express.json()); // Middleware to parse JSON request bodies

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies

app.use("/api", apiRouter); // Mounts the API router at the /api path
app.use(notFoundHandler); // Middleware to handle 404 Not Found errors
app.use(finalErrorHandler); // Middleware to handle errors and send appropriate responses

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});