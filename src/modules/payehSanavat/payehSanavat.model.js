const { Schema, model } = require("mongoose");
const PayehSanavatSchema = new Schema(
  {
    year: { type: Number, required: true, unique: true },
    dailySanavat: { type: Number, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);
const PayehSanavatModel = model("PayehSanavat", PayehSanavatSchema);

module.exports = {
  PayehSanavatModel,
};
