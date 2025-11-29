const db = require("../db/queries");

exports.getAvailableUsernames = async function(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
};

exports.getNewUser = function(req, res) {
  res.render("newUser");
};

exports.postNewUser = async function(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};