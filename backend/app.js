const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.post("/pagar", (req, res) => {
  res.send({ status: "success" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
