'use strict';

module.exports = {
  port:     process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD
  }
};
