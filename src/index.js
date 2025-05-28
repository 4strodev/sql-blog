const express = require("express");
const morgan = require("morgan");
const { getPool } = require("./db/getpool");
const app = express();

app.use(express.json());
app.use(morgan());

app.get("/", (_, res) => {
  const pool = getPool();

  pool.query();

  return res.json({ msg: "Hello world" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
