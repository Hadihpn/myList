const { KarfarmaServices } = require("./karfarm.services");
const { createKarfarmaSchema } = require("./karfarma.schema");
const { isValidObjectId } = require("mongoose");

class KarfarmaController {
  #KarfarmaServices;
  constructor() {
    this.#KarfarmaServices = KarfarmaServices;
  }

  async create(req, res, next) {
    try {
      const validate = await createKarfarmaSchema.validateAsync(req.body);
      const karfarma = await this.#KarfarmaServices.create(validate);
      return res.status(201).json({
        statusCode: 201,
        message: "کارفرما با موفقیت ایجاد شد.",
        data: karfarma,
      });
    } catch (error) {
      next(error);
    }
  }

  async find(req, res, next) {
    try {
      const karfarma = await this.#KarfarmaServices.find();
      return res.status(200).json({
        statusCode: 200,
        message: "لیست کارفرمایان با موفقیت دریافت شد.",
        data: karfarma,
      });
    } catch (error) {
      next(error);
    }
  }

  async findById(req, res, next) {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id))
        throw { statusCode: 400, message: "شناسه وارد شده صحیح نمیباشد" };
      const karfarma = await this.#KarfarmaServices.findById(id);
      if (!karfarma)
        throw { statusCode: 404, message: "کارفرمایی با این شناسه یافت نشد" };
      return res.status(200).json({
        statusCode: 200,
        message: "کارفرما با موفقیت یافت شد.",
        data: karfarma,
      });
    } catch (error) {
      next(error);
    }
  }

  async findKarfarmaByNationalCode(req, res, next) {
    try {
      const { nationalCode } = req.params;

      // Step 1: Validate the nationalCode format
      if (!/^\d{10}$/.test(nationalCode)) {
        throw { statusCode: 400, message: "کد ملی باید دقیقاً ۱۰ رقم باشد." };
      }

      // Step 2: Query the database for the karfarma with the given nationalCode
      const karfarma = await this.#KarfarmaServices.findKarfarmaByNationalCode(
        nationalCode
      );

      // Step 3: Check if a karfarma was found
      if (!karfarma) {
        throw {
          statusCode: 404,
          message: "هیچ کارفرمایی با این کد ملی یافت نشد.",
        };
      }

      // Step 4: Return the found karfarma document
      return res.status(200).json({
        statusCode: 200,
        message: "کارفرما با موفقیت بر اساس کد ملی یافت شد.",
        data: karfarma,
      });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id))
        throw { statusCode: 400, message: "شناسه وارد شده صحیح نمیباشد" };
      await createKarfarmaSchema.validateAsync(req.body);
      const karfarma = await this.#KarfarmaServices.update(id, req.body);
      if (!karfarma)
        throw { statusCode: 404, message: "کارفرمایی با این شناسه یافت نشد" };

      return res.status(200).json({
        statusCode: 200,
        message: "کارفرما با موفقیت به‌روزرسانی شد.",
        data: karfarma,
      });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id))
        throw { statusCode: 400, message: "شناسه وارد شده صحیح نمیباشد" };
      const karfarma = await this.#KarfarmaServices.delete(id);
      if (!karfarma)
        throw { statusCode: 404, message: "کارفرمایی با این شناسه یافت نشد" };

      return res.status(200).json({
        statusCode: 200,
        message: "کارفرما با موفقیت حذف شد.",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = KarfarmaController;
