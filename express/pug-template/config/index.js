require('dotenv').config();

module.exports = {
  isDev: process.env.NODE_ENV !== 'production',

  port: process.env.PORT,
  
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
};
