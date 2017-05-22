var pg = require('pg');
var config = {
  database: 'messageDB',
  user: 'postgres',
  password: '31101996',
  port: 5432,
  max: 10, //set pool max size to 20
  idleTimeoutMillis: 1000 //close idle clients after 1 second
};

var pool = new pg.Pool(config);

module.exports = pool;

