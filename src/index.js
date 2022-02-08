const app = require("./app.js");
//Configs
const { connectDb, connectCloudinary, log } = require("./config");

//ENV
const { PORT } = process.env;

//Connect Configs
log();
connectDb();
connectCloudinary();

app.listen(PORT, log.success("App Connected", "Listening to PORT:", PORT));
