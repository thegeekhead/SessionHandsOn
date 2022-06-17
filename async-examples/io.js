const fs = require("fs");
// console.log("Hello");
// console.log("World");

// process.stderr.write("Hello");
// process.stderr.write("World");

// const logMessage = (msg) => {
//   process.stdout.write("\n" + msg);
// }

// logMessage("hello");
// logMessage("world");

const person = {};
const nameProp = Object.defineProperty(person, "name",{
    configurable: true,
    set: (val) => {
      value=val;
      console.log("Name is: ",value);
    },
    get: () => value,
});

process.stdin.on("data", (data) => {
  person.name = data.toString();
});


