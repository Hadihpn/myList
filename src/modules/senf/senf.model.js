const { Schema, model } = require("mongoose");

const SenfSchema = new Schema(
  {
    code: { type: String, required: true, unique: true },
    title: { type: String, required: true, unique: true },
    jobs: [
      { default: [] },
      {
        type: Schema.Types.ObjectId,
        ref: "Job",
      },
    ],
  },
  {
    timestamps: true,
  }
);
function autoPopulate(next) {
  this.populate([{ path: "jobs" }]);
  next();
}
SenfSchema.pre(/^find/, autoPopulate);

const SenfModel = model("Senf", SenfSchema);

module.exports = {
  SenfModel,
};
