const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');

module.exports = {
  PORT: process.env.PORT,
  SALT: bcrypt.genSaltSync(10),
  JWT_SECRET: process.env.JWT_SECRET,
  DB_SYNC: process.env.DB_SYNC,
  AWS_ACCESS_KEY_ID: process.env.ACCESS_KEY,
  AWS_SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
  AWS_BUCKET_NAME: process.env.BUCKET_NAME,
};