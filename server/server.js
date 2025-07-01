require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT;
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");

connectDB();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/UserRoutes"));
app.use("/", require("./routes/employerRoutes"));
app.use("/", require("./routes/AuthRoutes"));

app.listen(port, () => {
  console.log("server running at : ", port);
});
