require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5001;

const connectDatabase = require("./database");

connectDatabase();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to HTC",
  });
});

app.use("/api", require("./routes"));

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
