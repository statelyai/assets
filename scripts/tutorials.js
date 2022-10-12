// @ts-check

const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const baseSortedArray = [
  "intro.md",
  "what-is-a-state-machine",
  "what-is-a-statechart",
  "states",
  "initial-states",
  "transitions-and-events",
  "parent-states",
  "parallel-states",
  "final-states",
  "history-states",
  "guards",
  "entry-and-exit-actions",
  "eventless-transitions",
  "delayed-transitions",
  "state-done-events",
  "self-transitions",
  "invoked-actors",
  "invoke-done-events",
  "invoke-error-events",
  "descriptions",
];

const fileNames = ["intro.md", "howtos.md", "docs-link.md"];
const tutorialsDir = path.join(__dirname, "..", "copy", "tutorials");

function writeContent(file, fd) {
  console.log(`Writing ${file}...`);
  // Write the file to the new tutorials.md file
  fs.writeSync(fd, fs.readFileSync(file, "utf8"));
  // Add a couple newlines
  fs.writeSync(fd, "\n\n");
}

async function combineTutorials() {
  console.log("Getting tutorial directories...");

  // Get each directory under copy/tutorials
  let tutorials = await readdir(tutorialsDir);

  // Sort tutorials-dir content based on the documented order and filter out what's not in there
  tutorials = tutorials
    .filter((a) => baseSortedArray.includes(a))
    .sort(function (a, b) {
      return baseSortedArray.indexOf(a) - baseSortedArray.indexOf(b);
    });

  console.log("Writing copy/tutorials.md...");
  // Make a new tutorials.md file
  const tutorialsMd = path.join(__dirname, "..", "copy", "tutorials.md");
  const fd = fs.openSync(tutorialsMd, "w");

  // For each tutorial...
  for (const tutorial of tutorials) {
    // If it's a file
    if (!(await stat(path.join(tutorialsDir, tutorial))).isDirectory()) {
      const file = path.join(tutorialsDir, tutorial);
      writeContent(file, fd);
    }
    // If it's a directory
    else {
      // For each file name in fileNames...
      for (const fileName of fileNames) {
        // Read the file
        const file = path.join(tutorialsDir, tutorial, fileName);

        // Check if file exists
        if (!fs.existsSync(file)) {
          continue;
        }

        writeContent(file, fd);
      }
    }
  }

  console.log("Done!");
}

combineTutorials();
