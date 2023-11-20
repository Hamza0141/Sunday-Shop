const mysql = require("mysql2/promise");
require("dotenv").config();
const pool = mysql.createPool({
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

const users = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_Name VARCHAR(250) NOT NULL,
    last_Name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    password VARCHAR(200) NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;
const Property_info = `CREATE TABLE IF NOT EXISTS Property_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(250) NOT NULL,
    name VARCHAR(250) NOT NULL,
    price INT NOT NULL,
    picture VARCHAR(200) ,
    status VARCHAR(250) NOT NULL,
    availability VARCHAR(250) NOT NULL,
    location VARCHAR(200),
    contact int (200),
    disc VARCHAR(3000) NOT NULL,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

(async () => {
  try {
    const connection = await pool.getConnection();
    await connection.query(users);
    await connection.query(Property_info);
    connection.release();
    console.log("Tables created successfully.");
  } catch (err) {
    console.error("Error creating tables:", err.message);
  }
})();

module.exports = pool;