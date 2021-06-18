require('dotenv').config();


module.exports = {
  username: process.env.DB_USERNAME || "linkobe24",
  password: process.env.DB_PASSWORD || "123456",
  database: process.env.DB_DATABASE || "squelize-cli",
  host: process.env.DB_HOST || "DESKTOP-AQMFC8J",
  port: process.env.DB_PORT || 1433,
  dialect: process.env.DB_DIALECT || "mssql",
}

