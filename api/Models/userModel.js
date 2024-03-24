import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    minlength: 1,
    maxlength: 30,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    minlength: 1,
    maxlength: 200,
    unique: true,
  },
  password: { type: String, require: true, minlength: 1, maxlength: 200 }
});

const userModel = mongoose.model("User", userSchema)

export default userModel;