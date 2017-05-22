// var config = {
//   database: 'messageDB',
//   user: 'postgres',
//   password: '31101996',
//   port: 5432,
//   max: 10, //set pool max size to 20
//   idleTimeoutMillis: 1000 //close idle clients after 1 second
// };

var pg = require('pg');
var config = {
  user: 'postgres', //env var: PGUSER
  database: 'messDB', //env var: PGDATABASE
  password: '123456', //env var: PGPASSWORD
  host: 'localhost', // Server hosting the postgres database
  port: 5432, //env var: PGPORT
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

module.exports = config;
