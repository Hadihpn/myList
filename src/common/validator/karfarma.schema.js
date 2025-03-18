const Joi = require("joi");
const createKarfarmaSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required()
    .error(new Error("نام باید بین 3 تا 30 کاراکتر باشد")),
  nationalCode: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required()
    .error(new Error("کد ملی باید 10 رقم و فقط عدد باشد")),
  password: Joi.string()
    .min(6)
    .max(30)
    .required()
    .error(new Error("رمز عبور باید بین 6 تا 30 کاراکتر باشد")),
  phoneNumber: Joi.string()
    .length(11)
    .pattern(/^09[0-9]{9}$/)
    .error(new Error("شماره تلفن باید 11 رقم و با 09 شروع شود")),
});
module.exports = {
  createKarfarmaSchema,
};
