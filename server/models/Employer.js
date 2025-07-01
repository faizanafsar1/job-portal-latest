const mongoose = require("mongoose");

const Employer = new mongoose.Schema({
  role: { type: String, default: "" },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: { type: String, default: "" },
  contact: { type: String, default: "" },
  password: { type: String, default: "" },
  refreshToken: { type: String, default: "" },
});
module.exports = new mongoose.model("Employer", Employer);
