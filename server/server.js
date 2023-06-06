const SERVER_CONF = require("./config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const apiRouter = require('./routes/apiRouter');

app.use("/api", apiRouter);

async function start() {
  try {
    await mongoose.connect(SERVER_CONF.DB.MONGO, {
      useNewUrlParser: true,
    });

    app.listen(SERVER_CONF.SERVER.PORT, () => {
      console.log(
        "SERVER START: http://" +
          SERVER_CONF.SERVER.HOST +
          ":" +
          SERVER_CONF.SERVER.PORT
      );
    });
  } catch (e) {
    console.log(e);
  }
}

start();
