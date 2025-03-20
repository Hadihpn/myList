const Joi = require("@hapi/joi");
const createJobSchema = Joi.object({
  code: Joi.string()
    .required()
    .error(new Error("کد شغل الزامی است")),
  title: Joi.string()
    .required()
    .error(new Error("عنوان شغل الزامی است")),
  dailySalary: Joi.number()
    .required()
    .error(new Error("حقوق روزانه الزامی است")),
});
module.exports = {
  createJobSchema,
};
