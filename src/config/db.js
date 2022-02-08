const mongoose = require("mongoose");
const log = require("./log");

const connectDb = () =>
  mongoose
    .connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(log.success("Database", "Connected"))
    .catch((e) => {
      log.error("Database", "Connection failed", e);
      process.exit(1);
    });

module.exports = connectDb;
