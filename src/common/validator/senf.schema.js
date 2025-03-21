
const Joi = require("@hapi/joi");

const createSenfSchema = Joi.object({
  code: Joi.string()
    .required()
    .error(new Error("کد صنف الزامی است")),
  title: Joi.string()
    .required()
    .min(3)
    .max(100)
    .error(new Error("عنوان صنف باید بین 3 تا 100 کاراکتر باشد")),
  jobs: Joi.array()
    .items(Joi.string())
    .error(new Error("مشاغل باید به صورت آرایه‌ای از شناسه‌ها باشد"))
});

const updateSenfSchema = Joi.object({
  code: Joi.string()
    .error(new Error("کد صنف باید به صورت رشته باشد")),
  title: Joi.string()
    .min(3)
    .max(100)
    .error(new Error("عنوان صنف باید بین 3 تا 100 کاراکتر باشد")),
  jobs: Joi.array()
    .items(Joi.string())
    .error(new Error("مشاغل باید به صورت آرایه‌ای از شناسه‌ها باشد"))
});

module.exports = { 
  createSenfSchema, 
  updateSenfSchema 
};
