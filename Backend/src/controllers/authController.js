import User from "../models/user.schema.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const user = User(req.body);
    const result = await user.save();
    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Account already exists with same email",
      });
    }
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({email}).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = user.jwtToken();
    user.password = undefined;

    const cookieOptions = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "error occured",
    });
  }
};
