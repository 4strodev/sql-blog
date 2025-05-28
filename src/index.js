const express = require('express');
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan());

app.get("/", (_, res) => {
    return res.json({msg: "Hello world"});
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})
