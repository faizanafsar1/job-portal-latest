const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  role: { type: String, default: "" },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: { type: String, default: "" },
  contact: { type: String, default: "" },
  password: { type: String, default: "" },
  educationLevel: { type: String, default: "" },
  studyField: { type: String, default: "" },
  jobTitle: { type: String, default: "" },
  jobCompany: { type: String, default: "" },
  skill: { type: String, default: "" },
  yearsExperience: { type: String, default: "" },
  refreshToken: { type: String, default: "" },
  address: {
    streetAddress: { type: String, default: "" },
    cityState: { type: String, default: "" },
    postal: { type: String, default: "" },
  },
  resume: {
    filename: { type: String, default: "" },
    filepath: { type: String, default: "" },
    mimetype: { type: String, default: "" },
    size: { type: String, default: "" },
    public_id: { type: String, default: "" },
    uploadedAt: { type: Date, default: Date.now },
  },
});
module.exports = new mongoose.model("user", UserSchema);
