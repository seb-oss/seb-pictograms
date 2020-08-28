const { readdirSync, rename, readFileSync } = require('fs');
const { resolve } = require('path');

// Load file names
const namesObjString = readFileSync(resolve('./data.json'), 'utf8')
const fileNames = JSON.parse(namesObjString)
    .filter(d => {
      return d.names;
    })
    .map(d => {
      return d.names[0]
    })

// Get path to image directory
const imageDirPath = resolve(__dirname, 'svg/light');

// Get an array of the files inside the folder
const files = readdirSync(imageDirPath);

// Loop through each file and rename
files.forEach((fileName, indx) => rename(
  imageDirPath + `/${fileName}`,
  imageDirPath + `/${fileNames[indx].toLowerCase()}.svg`,
  err => {
    if(err)
      console.log(err);
  }
));
