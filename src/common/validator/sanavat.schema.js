const Joi = require("@hapi/joi");
const SanavatSchema = Joi.object({
  year: Joi.number()
    .required()
    .error(new Error("سال  الزامی است")),
  monthlySanavat: Joi.number()
    .required()
    .error(new Error("مقدار  سنوات الزامی است")),
});
module.exports = {
    SanavatSchema,
};
