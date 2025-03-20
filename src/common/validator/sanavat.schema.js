const Joi = require("@hapi/joi");
const SanavatSchema = Joi.object({
  year: Joi.number()
    .required()
    .error(new Error("سال سابقه الزامی است")),
  dailySanavat: Joi.number()
    .required()
    .error(new Error("مقدار پایه سنوات الزامی است")),
});
module.exports = {
    SanavatSchema,
};
