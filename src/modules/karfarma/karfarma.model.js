const { Schema, model } = require("mongoose");
const KarfarmaSchema = new Schema(
  {
    name: { type: String, required: true },
    nationalCode: { type: String, required: true, unique: true },
    password: { type: String },
    phoneNumber: { type: String },
  },
  {
    timestamps: true,
  }
);
const KarfarmaModel = model("karfarma", KarfarmaSchema);
module.exports = {
  KarfarmaModel
};
