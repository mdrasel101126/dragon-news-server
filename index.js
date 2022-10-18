const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon News Backend Running....");
});
const categories = require("./data/categories.json");
app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("Dragon News Portal Running on Port ", port);
});
