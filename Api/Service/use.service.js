const pool = require("../../Config/database");
const bcrypt = require("bcrypt");

const checkUserExist = async (email) => {
  const query = "SELECT * FROM users WHERE email = ? ";
  const [rows] = await pool.query(query, [email]);
  console.log(rows);
  if (rows.length > 0) {
    return true;
  }
  return false;
};

const register = async (data) => {
  try {
    const salt = await bcrypt.genSalt(10);
    console.log("Password to hash:", data.Password);
    console.log("Generated salt:", salt);
    const hashPassword = await bcrypt.hash(data.Password, salt);
    console.log("Hashed password:", hashPassword);

    const query = `INSERT INTO users (first_Name, last_Name, email, password) VALUES (?, ?, ?, ?)`;
    const [row] = await pool.query(query, [
      data.first_Name,
      data.last_Name,
      data.email,
      hashPassword,
    ]);

    console.log(row);

    if (row.affectedRows !== 1) {
      return false;
    }

    const userId = row.insertId;
    console.log("Employee ID:", userId);

    const userProfile = {
      userId: userId,
    };

    return userProfile;
  } catch (err) {
    console.error(err);
    throw err;
  }
};


module.exports = {
  register,
  checkUserExist,
};
