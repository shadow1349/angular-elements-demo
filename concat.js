const fs = require("fs-extra");
const concat = require("concat");

(async function () {
  const files = [
    "./dist/elements-form/runtime.js",
    "./dist/elements-form/main.js",
    "./dist/elements-form/polyfills.js",
  ];

  console.log('Starting concat script');

  const exists = fs.existsSync("elements");

  if (exists) {
    console.log("Removing existing elements folder");
    fs.removeSync("elements");
  }

  await fs.ensureDirSync("elements");
  console.log("Created new Elements folder");

  await concat(files, "elements/elements.js");
  console.log("Concat files into a single file");

  await fs.copyFile("./dist/elements-form/styles.css", "elements/styles.css");
  console.log("Copying styles");
})();
