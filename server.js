const fs = require('fs');

const dir = "src/environments";
const file = "environments.ts";
const prodFile = "environments.prod.ts";

const content = `${process.env.ENVIRONMENT}`;

fs.access(dir, fs.constants.F_OK, err => {
  if (err) {
    fs.mkdir(dir, {recursive: true}, error => {
      if (error) {
        console.log(error)
        throw error;
      }
    });
  }
  try {
    fs.writeFileSync(dir + '/' + file, content);
    fs.writeFileSync(dir + '/' + prodFile, content);
    console.log("Created environment successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})
