// Using 'imagemin' and its plugin 'imageminSvgo' to optimize and compress svg files
// For more info visit -> https://www.npmjs.com/package/imagemin-svgo

const imagemin = require('imagemin');
const imageminSvgo = require('imagemin-svgo');
const { readdirSync } = require('fs');

// get svg folder's directory names
const getDirectories = readdirSync('../svg', { withFileTypes: true })
const directoryNames = getDirectories
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

// loop through the dir names and compress their contents
directoryNames.forEach((dir) => {
  (async () => {
    await imagemin([`../svg/${dir}/*.svg`], {
      destination: `../svg/${dir}`,
      plugins: [
        imageminSvgo({
            plugins: [
              {
                removeViewBox: false,
                removeRasterImages: true,
              }
            ]
        })
      ]
    })
    .then(res => {
      // console.log(res)
    });
  })();
})

