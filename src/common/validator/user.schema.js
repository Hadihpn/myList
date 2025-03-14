const Joi = require("@hapi/joi");
const createUserSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .min(3)
    .max(30)
    .error(new Error("نام باید بین 3 تا 30 کاراکتر باشد")),
  lastName: Joi.string()
    .required()
    .min(3)
    .max(30)
    .error(new Error("نام خانوادگی باید بین 3 تا 30 کاراکتر باشد")),
  fatherName: Joi.string()
    .min(3)
    .max(30)
    .error(new Error("نام پدر باید بین 3 تا 30 کاراکتر باشد")),
  birthdate: Joi.string().error(new Error("تاریخ تولد صحیح نیست")),
  nationalCode: Joi.string()
    .required()
    .min(10)
    .max(10)
    .error(new Error("کد ملی باید 10 رقم باشد")),
  pasportCode: Joi.string()
    .required()
    .min(8)
    .max(8)
    .error(new Error("کد پاسپورت باید 8 رقم باشد")),
  bornCity: Joi.string().error(new Error("شهر محل تولد صحیح نیست")),
  generateCity: Joi.string().error(new Error("شهر محل صدور صحیح نیست")),
  sex: Joi.boolean().error(new Error("جنسیت صحیح نیست")),
});
const updateUserSchema = Joi.object({
  firstName: Joi.string()
    .min(3)
    .max(30)
    .error(new Error("نام باید بین 3 تا 30 کاراکتر باشد")),
  lastName: Joi.string()
    .min(3)
    .max(30)
    .error(new Error("نام خانوادگی باید بین 3 تا 30 کاراکتر باشد")),
  fatherName: Joi.string()
    .min(3)
    .max(30)
    .error(new Error("نام پدر باید بین 3 تا 30 کاراکتر باشد")),
  birthdate: Joi.string().error(new Error("تاریخ تولد صحیح نیست")),
  nationalCode: Joi.string()
    .min(10)
    .max(10)
    .error(new Error("کد ملی باید 10 رقم باشد")),
  pasportCode: Joi.string().min(8).max(8).error(new Error("کد پاس")),
});
module.exports = { createUserSchema, updateUserSchema };
