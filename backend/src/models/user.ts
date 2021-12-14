import { model, Schema, Document } from "mongoose";
import bcrypt from "bcrypt";
export interface IUser extends Document {
  name: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  comparePassword: (password: string) => Promise<boolean>;
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastName: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: true,
  },
  //email required and should be a valid email string
  email: {
    required: true,
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    required: true,
    type: String,
    minlength: 8,
  },
});

userSchema.pre<IUser>("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

userSchema.methods.comparePassword = async function (
  password: string
): Promise<Boolean> {
  return await bcrypt.compare(password, this.password);
};

export default model<IUser>("User", userSchema);
