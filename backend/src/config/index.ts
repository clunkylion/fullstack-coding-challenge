require("dotenv").config();
export default {
  JWT_SECRET: process.env["JWT_SECRET"] || "somesecret",
  DB: {
    URI: process.env["MONGO_URI"] || "mongodb://localhost/legalboth-auth-db",
  },
};
