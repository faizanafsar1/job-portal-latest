const cloudinary = require("./cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const path = require("path");
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "resumes",
    resource_type: "raw",
    allowed_formats: undefined,
    public_id: (req, file) => {
      const nameWithoutExt = path.parse(file.originalname).name;
      return `${Date.now()}-${nameWithoutExt}`;
    },
  },
});
const upload = multer({ storage });

module.exports = upload;
