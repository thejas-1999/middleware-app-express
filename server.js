const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("request date:" + new Date());
  res.send("Welcome middleware app");
  next();
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});
