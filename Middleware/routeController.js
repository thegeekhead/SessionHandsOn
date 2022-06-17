const express = require("express");
const addError = require("./errordb.js").addError;
const data = require("./db/data.js").books

const router = express.Router();

const answerGetReq = (req, res) => {
  res.send({data});
}
const answerPostReq = (req, res) => {
  res.json({msg: "Hello from Post"})
}
const answerPutReq = (req, res) => {
  res.json({msg: "Hello from Put"})
}
const answerDeleteReq = (req, res) => {
  res.json({msg: "Hello from Delete"})
}
const answerAnyReq = (req, res) => {
  // res.json({msg: `Hello from ${req.originalUrl}`})
  throw Error("Could not find the requested resource")
}

router.get("/get",answerGetReq)
router.post("/post",answerPostReq)
router.put("/put",answerPutReq)
router.delete("/delete",answerDeleteReq)
router.use("/*",answerAnyReq)

module.exports = {
  router: router,
}