const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userRouter = require("express").Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { email, password, passwordverify } = req.body;
    if (!email || !password || !passwordverify) {
      return res.status(400).json({ message: "please enter required fields" });
    }

    if (password.length < 4) {
      return res
        .status(400)
        .json({ message: "please enter password more than 4 char" });
    }

    if (password !== passwordverify) {
      return res.status(400).json({ message: "password should be same" });
    }

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "an account already there with this email" });
    }
    const hashed_password = bcrypt.hashSync(password);

    const newUser = new UserModel({
      email,
      password: hashed_password,
      passwordverify: hashed_password,
    });
    console.log(newUser);
    await newUser.save();
    return res
      .status(200)
      .json({ message: "successfully registered", user: newUser });
  } catch (err) {
    return new Error(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  let existingUser;

  try {
    existingUser = await UserModel.findOne({ email });
  } catch (err) {
    return new Error(err);
  }

  if (!existingUser) {
    return res.status(400).json({ message: "user doesn't exist" });
  }

  const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "invalid email or password" });
  }

  const token = jwt.sign({ user: existingUser._id }, "jaiho");

  res
    .cookie("token", token, {
      httpOnly: true,
    })
    .send();
});

userRouter.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send("logged out");
});

userRouter.get("/loggedIn", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);
    jwt.verify(token, "jaiho");
    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

module.exports = userRouter;
