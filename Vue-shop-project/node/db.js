const mysql = require('mysql');

exports.base = (sql, data, callback) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vue-shopcar',
  });

  connection.connect();

  connection.query(sql, data, (error, result, fields) => {
    if (error) {
      throw error;
    }
    callback(result, fields);
  });
};
