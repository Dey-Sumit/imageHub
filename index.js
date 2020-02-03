const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`${new Date()} -${req.method} request for ${req.url}`);
  next(); //transfer the control
})

app.use(express.static('static'));

app.listen(3000,
  () => console.log("app is running on port 3000"));