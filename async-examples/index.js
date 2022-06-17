const fs = require("fs");

fs.watchFile('default.js',(curr, prev) => {
  console.log(`Current time - ${curr.mtime} || Previous time - ${prev.mtime}`);
})

fs.watch('default.js', {}, (eventype, filename) => {
  console.log("Event name :", eventype);
  console.log("File name :", filename);
})

setTimeout(() => {
  for (let index = 0; index < 100000; index++) {
    console.log(index);
  }
},1000)