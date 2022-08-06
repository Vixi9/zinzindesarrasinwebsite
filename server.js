const fs = require('fs');
const path = require("path");

const dir = "src/environments";
const file = "environments.ts";
const prodFile = "environments.prod.ts";

const content = `${process.env.ENVIRONMENT}`;

fs.access(dir, fs.constants.F_OK, err => {
  if (err) {
    console.log("Directory does not exists, creating it now", process.cwd());
    fs.mkdir(dir, {recursive: true}, error => {
      if (error) {
        console.log(error);
        throw error;
      }
    });
  }
  try {
    fs.writeFileSync(dir + '/' + file, content);
    fs.writeFileSync(dir + '/' + prodFile, content);
    console.log("Created successfully in", process.cwd());
    if (fs.existsSync(dir + '/' + file)) {
      console.log("File created", path.resolve(dir + '/' + file));
    }
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})
