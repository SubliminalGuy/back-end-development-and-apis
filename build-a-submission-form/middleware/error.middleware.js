const notFoundHandler = (req, res, next) => {
 const error = new Error(`Not Found - ${req.originalUrl}`);
 error.status = 404;
 next(error); // Passes the error to the next middleware (error handler)
};

const finalErrorHandler = (err, req, res, next) => {
 const statusCode = err.status || 500; // Default to 500 if no status is set
 res.status(statusCode).json({
  error: true,
  status: statusCode, 
  message: statusCode === 500 ? "Internal Server Error (Check Server Logs)" : err.message,

 });
}

export { notFoundHandler, finalErrorHandler };