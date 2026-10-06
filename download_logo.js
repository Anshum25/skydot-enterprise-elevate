import https from 'https';
import fs from 'fs';

const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Moodle-logo.svg/1200px-Moodle-logo.svg.png';
const file = fs.createWriteStream('public/moodle-logo.png');

https.get(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
}, function(response) {
  if (response.statusCode === 200) {
    response.pipe(file);
    file.on('finish', function() {
      file.close();
      console.log('Download complete.');
    });
  } else {
    console.error('Failed to download: ' + response.statusCode);
  }
}).on('error', function(err) {
  fs.unlink('public/moodle-logo.png', () => {});
  console.error('Error: ' + err.message);
});
