const express = require("express");
const { addError } = require("./errordb.js");
const logger = require("./middleware.js").Logger;
const router = require("./routeController").router;

const app = express();

if (process.env.ENVIRONMENT === "DEV") {
  console.log("DEV ENV");
}

const PORT_NUMBER = process.env.PORT || 4000;

app.use("/api",logger, router);
app.use("/*", (req, res) => {
  res.statusCode = 404;
  res.json({msg : `Couldn't find the resource.`});
})

app.use((err, req, res, next) => {
  if (err) {
    const errorID = addError(err);
    res.statusCode = 500;
    res.json({msg : `ErrorID: ${errorID}`});
  }
  next();
})

// app.get("/get",logger,(req, res) => {
//     res.send({ msg: "Hello World" });
//   })
// app.post("/post",logger,(req, res) => {
//   res.send({ msg: "Hello World" });
// })
// app.put("/put",logger,(req, res) => {
//   res.send({ msg: "Hello World" });
// })
// app.delete("/delete",logger,(req, res) => {
//   res.send({ msg: "Hello World" });
// })

app.listen(PORT_NUMBER, () => {
  console.log(`check ${PORT_NUMBER}`);
})