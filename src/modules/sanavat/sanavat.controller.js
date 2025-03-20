const autoBind = require("auto-bind");
const { StatusCodes: httpStatus } = require("http-status-codes");
const SanavatServices = require("./sanavat.services");
const { SanavatSchema } = require("../../common/validator/sanavat.schema");
const { isValidObjectId } = require("mongoose");
class Sanavatontroller {
  #sanavatServices;
  constructor() {
    autoBind(this);
    this.#sanavatServices = SanavatServices;
  }
  async create(req, res, next) {
    try {
      await SanavatSchema.validateAsync(req.body);
      const sanavat = await this.#sanavatServices.create(req.body);
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
      const sanavats = await this.#sanavatServices.getAll();
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
      const sanavat = await this.#sanavatServices.getByTitle(parseInt(year));
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
        const sanavat = await this.#sanavatServices.getById(id);
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
        const result = await this.#sanavatServices.delete(id);
        if (!result)
          throw { statusCode: 404, message: "شغلی با این شناسه یافت نشد" };

        return res.status(httpStatus.OK).json({
          statusCode: 200,
          message: "شغل با موفقیت حذف شد.",
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
      const sanavat = await this.#sanavatServices.updatePrice(
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
        await SanavatSchema.validateAsync(req.body);
        const sanavat = await this.#sanavatServices.update(id, req.body);
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
module.exports = new Sanavatontroller();
