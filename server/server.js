require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

connectDB();
const allowedOrigins = ["http://localhost:3000", "https://job-portal-alpha-nine.vercel.app"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/JobRoutes"));
app.use("/", require("./Scrapping"));

app.listen(port, () => {
  console.log("server running at : ", port);
});
