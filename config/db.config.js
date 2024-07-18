const dotenv = require("dotenv").config();
// process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_SERV,
  database: process.env.DB_NAME,
  // port: 5432,
  query_timeout: parseInt(process.env.DB_REQUEST_TIMEOUT),
  connectionTimeoutMillis: parseInt(process.env.DB_CONNECT_TIMEOUT),
};
