const path = require('path');

const a = path.resolve(__dirname, 'src/main.js');
const b = path.join(__dirname, '/src/main.js');
console.log(a);
console.log(b);
