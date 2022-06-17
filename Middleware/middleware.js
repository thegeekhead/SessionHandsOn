const counter = 0;
const logRequest = (req, res, next) => {
  console.log(`${counter} - ${new Date()} - ${req.method} - ${req.url}`);
  next();
  counter++;
}

module.exports = {
  Logger: logRequest,
}