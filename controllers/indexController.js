const db = require("../db/queries");

exports.getUsernames = async function(req, res) {

  let usernames;

  if (Object.keys(req.query).length === 0) {
    usernames = await db.getAllUsernames();
    res.render("index", { usernames: usernames });
    return;
  }
  
  const searchTerm = req.query.search;

  if (searchTerm === '') {
    console.log("nice2");
    return res.redirect('/');
  } 

  usernames = await db.getSearchUsernames(searchTerm);

  res.render("index", { usernames: usernames })
};

exports.getNewUser = function(req, res) {
  res.render("newUser");
};

exports.postNewUser = async function(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};

exports.deleteAllUsers = async function(req, res) {
  db.clearUsernames();
  res.redirect("/");
}