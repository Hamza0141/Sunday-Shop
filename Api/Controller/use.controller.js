const userService = require("../Service/use.service");

const addUser = async (req, res) => {
  const userData = req.body;
  const userchek = await userService.checkUserExist(userData.email);
  if (userchek) {
    res.status(400).json({
      error: "This email address is already associated with another User!",
    });
  } else {
    const sendData = await userService.register(userData);

    if (sendData === false) {
      res.status(400).json({
        error: "Failed to add the employee!",
      });
      console.log(sendData);
    } else sendData === true;
    res.status(200).json({
      status: "true",
      message: "User added successfully",
    });
  }
};
module.exports = {
  addUser,
};
