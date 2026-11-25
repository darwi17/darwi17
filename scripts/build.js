const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const source = path.join(root, "index.html");
const webDir = path.join(root, "www");

if (!fs.existsSync(source)) {
  throw new Error("Missing index.html. Add the FinanzApp web app before building the APK.");
}

fs.mkdirSync(webDir, { recursive: true });
fs.copyFileSync(source, path.join(webDir, "index.html"));
console.log("Prepared FinanzApp web app in www/.");
