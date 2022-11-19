const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "pgpassword",
  host: "localhost",
  port: 5432,
});

module.exports = pool;
