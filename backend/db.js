const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "kts1004",
  database: "myapp",
});

exports.pool = pool;
