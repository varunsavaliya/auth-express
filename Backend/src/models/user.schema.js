import mongoose, { Schema } from "mongoose";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      maxLength: [50, "Name must be less than 50 characters"],
      trim: true,
    },
    username: {
      type: String,
      required: [true, "User name is required"],
      maxLength: [50, "User name must be less than 50 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "User already registered"],
      lowercase: true,
    },
    password: {
      type: String,
      select: false,
    },
    bio: {
      type: String,
      required: [true, "Bio is required"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods = {
  jwtToken() {
    return JWT.sign({ id: this._id, email: this.email }, process.env.SECRET, {
      expiresIn: "24h",
    });
  },
};

const User = mongoose.model("User", userSchema);

export default User;
