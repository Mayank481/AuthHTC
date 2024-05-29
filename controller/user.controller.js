const userdata = require("../models/user.model");

module.exports.signUp = async (req, res) => {
  try {
    const payload = req.body;
    const user = await userdata(payload).save();
    return res.json({ message: "Account created Successfully", user });
  } catch (error) {
    res.status(500).json({
      message: "Something wants wrong :(",
    });
  }
};

module.exports.signIn = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await userdata.findOne({
      Email: Email,
      Password: Password,
    });
    if (user) {
      return res.status(200).json({
        message: "Login Successfully",
        user,
      });
    }
    return res.status(401).json({
      message: "Invalid credentials",
    });
  } catch (error) {
    res.status(401).json({
      message: "Invalid Credentials",
    });
  }
};
