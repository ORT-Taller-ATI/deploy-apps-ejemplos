const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/greet", (req, res) => {
  const name = req.body.name || "Guest";
  res.send(`<h2>Hello, ${name}!</h2>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});