const fs = require("fs");
const path = require("path");

const entryPoint = path.join(__dirname, "..", "www", "index.html");
if (!fs.existsSync(entryPoint)) {
  throw new Error("Missing www/index.html. Add the FinanzApp web app before building the APK.");
}

console.log("FinanzApp web app found.");
