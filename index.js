const express = require("express");

const app = express();

app.use(() => {
  console.log("Hello Server");
  console.log("This is me!");
  console.log("Who are you")
});

app.listen(4000);
