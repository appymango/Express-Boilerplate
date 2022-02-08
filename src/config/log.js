const chalk = require("chalk");

const log = (title, ...message) => {
  console.log(chalk.greenBright("[Logger]:"), chalk.green("Connected"));

  // console.log(process.env.NODE_ENV);

  const info = (title, ...message) => {
    let result;
    for (let key in message) {
      result = result ? `${result} ${message[key]}` : message[key];
    }
    console.log(chalk.blueBright(`[${title}]:`), chalk.blue(result));
  };

  const http = (title, ...message) => {
    let result;
    for (let key in message) {
      result = result ? `${result} ${message[key]}` : message[key];
    }
    console.log(chalk.cyanBright(`[${title}]:`), chalk.cyan(result));
  };

  const success = (title, ...message) => {
    let result;
    for (let key in message) {
      result = result ? `${result} ${message[key]}` : message[key];
    }
    console.log(chalk.greenBright(`[${title}]:`), chalk.green(result));
  };

  const warn = (title, ...message) => {
    let result;
    for (let key in message) {
      result = result ? `${result} ${message[key]}` : message[key];
    }
    console.log(chalk.yellowBright(`[${title}]:`), chalk.yellow(result));
  };

  const error = (title, ...message) => {
    let result;
    for (let key in message) {
      result = result ? `${result} ${message[key]}` : message[key];
    }
    console.log(chalk.redBright(`[${title}]:`), chalk.red(result));
  };

  //Default log
  let result;
  for (let key in message) {
    result = result ? `${result} ${message[key]}` : message[key];
  }
  title &&
    message &&
    console.log(chalk.whiteBright(`[${title}]:`), chalk.white(result));

  log.info = info;
  log.http = http;
  log.success = success;
  log.warn = warn;
  log.error = error;
};

module.exports = log;
