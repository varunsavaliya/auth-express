import User from "../models/user.schema.js";
export const profile = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
