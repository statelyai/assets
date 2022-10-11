// @ts-check

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const fileNames = ['intro.md', 'howtos.md', 'docs-link.md'];

async function combineTutorials() {
  console.log('Getting tutorial directories...');

  // Get each directory under copy/tutorials
  const tutorialsDir = path.join(__dirname, '..', 'copy', 'tutorials');
  const tutorials = await readdir(tutorialsDir);

  console.log('Writing copy/tutorials.md...');
  // Make a new tutorials.md file
  const tutorialsMd = path.join(__dirname, '..', 'copy', 'tutorials.md');
  const fd = fs.openSync(tutorialsMd, 'w');

  // For each tutorial...
  for (const tutorial of tutorials) {
    // Skip if not a directory
    if (!(await stat(path.join(tutorialsDir, tutorial))).isDirectory()) {
      console.log(`Skipping ${tutorial} (not a directory)...`);
      continue;
    }

    // For each file name in fileNames...
    for (const fileName of fileNames) {
      // Read the file
      const file = path.join(tutorialsDir, tutorial, fileName);

      // Check if file exists
      if (!fs.existsSync(file)) {
        continue;
      }

      // Write the file to the new tutorials.md file
      console.log(`Writing ${file}...`);
      const contents = fs.readFileSync(file, 'utf8');
      fs.writeSync(fd, contents);

      // Add a couple newlines
      fs.writeSync(fd, '\n\n');
    }
  }

  console.log('Done!');
}

combineTutorials();
