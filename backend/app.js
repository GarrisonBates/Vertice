const express = require("express");
const data = require("./data.json");
const cors = require("cors");

const app = express();
app.use(cors());
const port = 3003;

app.get("/getData", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
