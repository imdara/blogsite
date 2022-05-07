import bcrypt from "bcrypt";
// importing models
import User from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

export const signUserUp = async (req, res) => {
  const { name, email, password } = req.body;
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  await User.create({ name, email, password: hashedPassword });
  res.send("User signed up successfully");
};

export const logUserIn = async (req, res) => {
  const { email, password } = req.body;
  const emailExist = await User.findOne({ email });
  if (!emailExist) {
    res.send(`${email} is not registered`);
  } else {
    const passwordCheck = await bcrypt.compare(password, emailExist.password);
    passwordCheck
      ? res.send("User logged in successfully")
      : res.send("Password entered is incorrect");
  }
};

// export const logUserOut = async (req, res) => {};
