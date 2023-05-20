const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "cafe",
  password: "Aat8912000!",
  port: 5432,
});
client.connect();
client.query("Select*From users", (err, res) => {
  console.log(res.rows);
  client.end();
});
