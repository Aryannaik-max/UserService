const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');

module.exports = {
  PORT: process.env.PORT,
  SALT: bcrypt.genSaltSync(10),
  JWT_SECRET: process.env.JWT_SECRET,
  DB_SYNC: process.env.DB_SYNC
};