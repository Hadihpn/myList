const autoBind = require("auto-bind");
const { StatusCodes: httpStatus } = require("http-status-codes");
const PayehSanavatServices = require("./payehSanavat.services");
const { isValidObjectId } = require("mongoose");
const { PayehSanavatSchema } = require("../../common/validator/payehSanavat.schema");
class PayehSanavatontroller {
  #payehSanavatServices;
  constructor() {
    autoBind(this);
    this.#payehSanavatServices = PayehSanavatServices;
  }
  async create(req, res, next) {
    try {
      await PayehSanavatSchema.validateAsync(req.body);
      const sanavat = await this.#payehSanavatServices.create(req.body);
      return res.status(httpStatus.CREATED).json({
        statusCode: httpStatus.CREATED,
        data: {
          sanavat,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async getAll(req, res, next) {
    try {
      const sanavats = await this.#payehSanavatServices.getAll();
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          sanavats,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async getByYear(req, res, next) {
    try {
      const { year } = req.params;
      const sanavat = await this.#payehSanavatServices.getByYear(parseInt(year));
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          sanavat,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      const { id } = req.params;
      if (isValidObjectId(id)) {
        const sanavat = await this.#payehSanavatServices.getById(id);
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: {
            sanavat,
          },
        });
      }
      return res.status(httpStatus.BAD_REQUEST).json({ message: "Invalid Id" });
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      if (isValidObjectId(id)) {
        const result = await this.#payehSanavatServices.delete(id);
        if (!result)
          throw { statusCode: 404, message: "پایه سنواتی با این شناسه یافت نشد" };

        return res.status(httpStatus.OK).json({
          statusCode: 200,
          message: "پایه سنواتی با موفقیت حذف شد.",
        });
      }
      return res.status(httpStatus.BAD_REQUEST).json({ message: "Invalid Id" });
    } catch (error) {
      next(error);
    }
  }
  async updatePrice(req, res, next) {
    try {
      const { oldPrice, newPrice } = req.body;
      const sanavat = await this.#payehSanavatServices.updatePrice(
        oldPrice,
        newPrice
      );
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          sanavat,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const { id } = req.params;
      if (isValidObjectId(id)) {
        await PayehSanavatSchema.validateAsync(req.body);
        const sanavat = await this.#payehSanavatServices.update(id, req.body);
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: {
            sanavat,
          },
        });
      }
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new PayehSanavatontroller();
