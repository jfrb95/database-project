const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "jb",
  database: "top_users",
  password: "niceguy",
  port: 5432
});