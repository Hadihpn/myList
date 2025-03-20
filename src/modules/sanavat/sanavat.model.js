const { Schema, model } = require("mongoose");
const SanavatSchema = new Schema(
  {
    year: { type: Number, required: true, unique: true },
    dailySanavat: { type: Number, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);
const SanavatModel = model("Sanavat", SanavatSchema);

module.exports = {
    SanavatModel,
};
