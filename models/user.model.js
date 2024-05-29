const mongooes = require("mongoose");

const userschema = new mongooes.Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Password: String,
});
module.exports = mongooes.model("user", userschema);
