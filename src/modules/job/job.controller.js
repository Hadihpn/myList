const autoBind = require("auto-bind");
const { StatusCodes: httpStatus } = require("http-status-codes");
const  JobServices  = require("./job.services");
const { createJobSchema } = require("../../common/validator/job.schema");
const { isValidObjectId } = require("mongoose");
class JobController {
  #jobService;
  constructor() {
    autoBind(this);
    this.#jobService = JobServices;
  }
  async create(req, res, next) {
    try {
      await createJobSchema.validateAsync(req.body);
      const job = await this.#jobService.create(req.body);
      return res.status(httpStatus.CREATED).json({
        statusCode: httpStatus.CREATED,
        data: {
          job,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async getAll(req, res, next) {
    try {
      console.log(("get all"));
      
      const jobs = await this.#jobService.getAll();
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          jobs,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async getByTitle(req, res, next) {
    try {
      const { title } = req.params;
      const job = await this.#jobService.getByTitle(title);
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          job,
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
        const job = await this.#jobService.getById(id);
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: {
            job,
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
        const result = await this.#jobService.delete(id);
        if (!karfarma)
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
        const job = await this.#jobService.updatePrice(oldPrice, newPrice);
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: {
            job,
          },
        });
      } catch (error) {
        next(error);
      }
    }
}
module.exports = new JobController()