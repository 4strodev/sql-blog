const express = require("express");
const morgan = require("morgan");
const { getPool } = require("./db/getpool");
const app = express();

app.use(express.json());
app.use(morgan());

app.get("/", async (_, res) => {
    const pool = getPool();

    const result = await pool.query("select * from user");

    return res.json(result[0]);
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});
