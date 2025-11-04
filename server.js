const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
