const fs = require('fs');
const path = require('path');

// Skapa katalogen om den inte finns
const distDir = path.join(__dirname, '../dist/tbbrewing');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Skapa CNAME-filen
const cnamePath = path.join(distDir, 'CNAME');
fs.writeFileSync(cnamePath, 'www.tbbrewing.com');

console.log('CNAME file created!');
