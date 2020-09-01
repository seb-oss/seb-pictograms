const { readdirSync, readFileSync, renameSync } = require('fs');
const { resolve } = require('path');

// Load file names
const namesObjString = readFileSync(resolve('../data.json'), 'utf8')
const fileNames = JSON.parse(namesObjString)
    .filter(d => {
      return d.names;
    })
    .map(d => {
      return d.names[0]
    })

// Get path to image directory
const imageDirPath = resolve(__dirname, '../svg/regular');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Sort the array
const sortedFiles = files.sort(function(a, b){
  return a.split("-")[0] - b.split("-")[0];
});

// Loop through each file and rename
sortedFiles.forEach((fileName, indx) => renameSync(
  imageDirPath + `/${fileName}`,
  imageDirPath + `/${fileNames[indx].toLowerCase()}.svg`
));
