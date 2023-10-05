import emailValidator from "email-validator";
export const signupDataValidate = (req, res, next) => {
  const { username, email, password, bio, name } = req.body;
  if (!username || !email || !password || !bio || !name) {
    return res.status(400).json({
      success: false,
      message: "Every field is required",
    });
  }

  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: "please provide valid email",
    });
  }

  next();
};
