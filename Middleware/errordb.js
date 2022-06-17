var errors = [];

let counter = 1000000;
const addError = (err) => {
  counter++;
  errors.push({id: counter, msg: err.message, time: new Date().getTime()});
  console.log(errors);
  return counter;
}

module.exports = {
  addError: addError,
}