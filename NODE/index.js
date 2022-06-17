// function A {

// }

// const os = require("os");
// console.log(os.cpus());

// import chalk from "chalk";
// console.log(chalk);

//node modeules whicjh are thaere in the node software itself
//npm open source modules/packages
//hand crafted


//chalk
//http
//rest
//eventloop

//Print hello
//current time - Hello + Message
// function printMessage(message) {
//   console.log(`${new Date()} - Hello ${message}`);
// }

// const printMessage = require("./default");
// const CURR_TIME = require("./anotherfile").CURR_TIME;
// // import printMessage from "./default.js";
// printMessage("world");
// printMessage(CURR_TIME);
// printMessage(CURR_TIME);
// printMessage(CURR_TIME);
// printMessage(CURR_TIME);

// const http = require("http");
// // console.log(http);

// const PORT_NUMBER = 4400;
// const server = http.createServer((req, res) => {
//   if (req.url === "/hello") {
//     res.write("Hello world");
//     res.end();
//   } else if (req.url === "/xyz") {
//     res.write("Hello");
//     res.end();
//   }
// })

// server.listen(PORT_NUMBER);

const express = require("express");
const movies = require("./data");

const app = express();

console.log(app);

const port = 4500;

app.get("/", (req, res) => {

  res.json(movies);
});
app.get("/:id", (req, res) => {
  const id = req.query;
  const d = {};
  for (let index = 0; index < movies.length; index++) {
    const element = movies[index];
    if(element.id == id) {
      d = element;
      break;
    }
  }
  res.json(d)
})

app.post("/", (req, res) => {
  const data = req.body;
  movies.push(data);
  res.json(movies);

})

app.listen(4500, (req, res) => {
  console.log(`server is running on POrt ${port}`)
})