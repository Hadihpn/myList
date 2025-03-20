const { Schema, model } = require("mongoose");
const JobSchema = new Schema(
  {
    code: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    dailySalary: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const JobModel = model("Job", JobSchema);

module.exports = {
  JobModel
};
