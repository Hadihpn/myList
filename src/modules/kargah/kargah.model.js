const { Schema, model } = require("mongoose");
const KargahSchema = new Schema(
  {
    title: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String },
    trustedPhone: { type: String },
    customMessage : { type: String },
    userName: { type: String, required: true, unique: true },
    password: { type: String },
    isActived: { type: Boolean, default: true },
    komakDolat: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
module.exports = {
  KargahModel: model("kargah", KargahSchema),
};
