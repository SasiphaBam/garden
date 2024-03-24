import userModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";

const createToken = (_id) => {
  const jwtkey = process.env.JWT_SECRET_KEY;
  return jwt.sign({ _id }, jwtkey, { expiresIn: "3d" });
};

export async function registerUser(req, res) {
  const { email, username, password } = req.body;

  try {
    let user = await userModel.findOne({ username });

    if (user) {
      return res.status(400).json("Username is not available.");
    }
    user = new userModel({ email, username, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = createToken(user._id);

    res.status(200).json({ _id: user._id, username, email, token });
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function Login(req, res) {
  const { username, password } = req.body;

  try {
    let user = await userModel.findOne({ username });

    console.log(username);

    if (!user) {
      return res.status(400).json("Invalid username or password");
    }
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json("Invalid username or password");
    }

    const token = createToken(user._id);

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function findUser(req, res) {
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getUser(req, res) {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getAdminUser(req, res) {
  const username = "Beautiful_Home_Garden";
  try {
    let user = await userModel.findOne({ username });

    if (!user) {
      return res.status(400).json("Invalid username or password");
    }

    res.status(200).json({
      _id: user?._id,
      username: user?.username,
      email: user?.email,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}
