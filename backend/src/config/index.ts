export default {
  JWT_SECRET: process.env.JWT_SECRET || "somesecret",
  DB: {
    URI: process.env.MONGO_URI || "mongodb://localhost/legalboth-auth-db",
    USER: process.env.MONGO_USER || "",
    PASSWORD: process.env.MONGO_PASSWORD || "",
  },
};
