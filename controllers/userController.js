const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ msg: "Incorrect Username or Password", status: false });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.json({ msg: "Incorrect Username or Password", status: false });
    }

    const sanitizedUser = user.toObject();
    delete sanitizedUser.password;

    return res.json({ status: true, user: sanitizedUser });
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  console.log(req.body);
  try {
    const { username, email, mobilenumber, gender, password } = req.body;

    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
      return res.json({ msg: "Username already used", status: false });
    }

    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email already used", status: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      username,
      password: hashedPassword,
      mobilenumber: mobilenumber,
      gender: gender,
    });

    const sanitizedUser = user.toObject();
    delete sanitizedUser.password;

    return res.json({ status: true, user: sanitizedUser });
  } catch (error) {
    next(error);
  }
};

exports.logOut = (req, res, next) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      return res.json({ msg: "User id is required" });
    }
    onlineUsers.delete(userId);

    return res.status(200).send();
  } catch (error) {
    next(error);
  }
};
