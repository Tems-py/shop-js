const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "sklep_komputerowy",
  password: "",
});

module.exports = pool.promise();
