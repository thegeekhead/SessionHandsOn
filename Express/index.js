const express = require("express");
const books = require("./db/data").books;

const PORT = process.env.PORT || 3500;

const app = express();
app.use(express.json());

app.get("/getdata", (req, res) => {
  res.send({books});
});
app.post("/savedata", (req, res) => {
  const data = req.body;
  books.push(data);
  res.send({message: "SAVED"});
});
app.put("/updatedata/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const data = req.body;
  const position = books.findIndex((book) => book.isbn === isbn);
  console.log(position);
  if(position != -1) {
    books[position] = data;
    res.statusCode = 200;
    res.send({message: "UPDATED"});//UPDATE
  } else {
    res.statusCode = 404;
    res.send({message: "DATA NOT FOUND"});
  }
})
app.delete("/deletedata/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const position = books.findIndex((book) => book.isbn === isbn);
  console.log(position);
  if (position != -1) {
    books.splice(position, 1);
    res.statusCode = 200;
    res.send({message: "DELETED"});
  } else {
    res.statusCode = 404;
    res.send({message: "DATA NOT FOUND"});
  }
})

app.listen(PORT, () => {
  console.log(`visit http://localhost:${PORT}`);
})