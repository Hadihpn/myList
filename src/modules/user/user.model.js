const { Schema, model } = require("mongoose");
const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fatherName: { type: String },
    birthdate: { type: String },
    nationalCode: { type: String, required: true, unique: true },
    pasportCode: { type: String, required: true, unique: true },
    bornCity: { type: String },
    generateCity: { type: String },
    sex: { type: Boolean, default: false },
    isMarried: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
const UserModel = model("user", UserSchema);
module.exports = {
  UserModel
};
