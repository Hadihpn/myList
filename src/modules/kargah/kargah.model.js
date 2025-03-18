const { Schema, model } = require("mongoose");
const KargahSchema = new Schema(
  {
    title: { type: String, required: true },
    lastName: { type: String, required: true },
    fatherName: { type: String },
    birthdate: { type: String },
    nationalCode: { type: String, required: true, unique: true },
    pasportCode: { type: String, required: true, unique: true },
    bornCity: { type: String },
    generateCity: { type: String },
    sex: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
module.exports = {
  KargahModel: model("kargah", KargahSchema),
};
