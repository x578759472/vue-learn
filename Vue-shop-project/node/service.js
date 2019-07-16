const multiparty = require('multiparty');
const path = require('path');
const db = require('./db');

exports.getLunbotu = (req, res) => {
  db.base('select * from lunbotu', null, (result, fields) => {
    result.forEach((element, index, arr) => {
      arr[index].img = `http://${path.join(req.headers.host, '/www/images/', element.img)}`;
    });
    res.json(result);
  });
};
