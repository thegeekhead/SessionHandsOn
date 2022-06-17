const http = require("http");
const books = require("./db/data").books;

const server = http.createServer((req, res) => {
  if (req.url === "/get") {
    const data = JSON.stringify(books);
    res.setHeader("Content-Type", "application/json"); //sets data in json format
    res.write(data, (err) => {
      if (err) {
        console.log(err.message);
      }
    })
    res.end();
  } else if (req.url === "/save") {
    req.on("data", (data) => {
      const book = data.toString("utf-8");
      const booksAsJSON = JSON.parse(book);
      books.push(booksAsJSON);
      console.log(booksAsJSON);
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 201;
      res.write(JSON.stringify(books));
      res.end();
    });
  } else {
    res.write("hello, world");
    res.end();
  }
});

server.listen(8000, () => {
  console.log(`visit http://localhost:8000`);
});