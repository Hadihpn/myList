const { Schema, model } = require("mongoose");
const KarfarmaSchema = new Schema(
  {
    name: { type: String, required: true },
    nationalCode: { type: String, required: true, unique: true },
    password: { type: String, },
    phoneNumber: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = {
  KarfarmaModel: model("karfarma", KarfarmaSchema),
};
