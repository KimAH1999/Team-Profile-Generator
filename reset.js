//Gets rid of index.html from dist/folder
//When `npm run reset' is script
const fs = require('fs');
if (fs.existsSync('./dist/index.html')) {
  fs.unlinkSync('./dist/index.html');
  console.log('/dist/ folder reset!');
}
