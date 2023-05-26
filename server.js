const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDatabase = require("./src/config/database");

app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));

// Connecting to database
connectDatabase();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.use("/auth", require("./src/Routes/userRoute"));

const server = app.listen(3000, () => {
  console.log(`Server is working on http://localhost:3000`);
});
