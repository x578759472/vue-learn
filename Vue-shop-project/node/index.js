const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();
app.use('/www', express.static(path.join(__dirname, 'public')));
app.use(router);
const server = app.listen(3000, 'localhost', () => {
  console.log('running...');
});

// console.log(server.address().address);
