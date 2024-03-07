const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("request date:" + new Date());

  next();
});

app.use((req, res, next) => {
  var filepath = path.join(__dirname, "static", req.url);
  fs.stat(filepath, (err, fileInfo) => {
    if (err) {
      next();
      return;
    }
    if (fileInfo.isFile()) {
      res.sendFile(filepath);
    } else {
      next();
    }
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("File is not found");
});

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});
