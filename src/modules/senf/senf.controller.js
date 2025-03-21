
const autoBind = require("auto-bind");
const { StatusCodes: httpStatus } = require("http-status-codes");
const { isValidObjectId } = require("mongoose");
const SenfService = require("./senf.services");
const { createSenfSchema, updateSenfSchema } = require("../../common/validator/senf.schema");

class SenfController {
  #senfService;
  constructor() {
    autoBind(this);
    this.#senfService = SenfService;
  }
  
  async create(req, res, next) {
    try {
      await createSenfSchema.validateAsync(req.body);
      const senf = await this.#senfService.create(req.body);
      return res.status(httpStatus.CREATED).json({
        statusCode: httpStatus.CREATED,
        data: {
          senf,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  
  async find(req, res, next) {
    try {
      const senfs = await this.#senfService.find(req.query);
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          senfs,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  
  async findById(req, res, next) {
    try {
      const { id } = req.params;
      if (isValidObjectId(id)) {
        const senf = await this.#senfService.findById(id);
        if (!senf) {
          return res.status(httpStatus.NOT_FOUND).json({
            statusCode: httpStatus.NOT_FOUND,
            message: "صنف مورد نظر یافت نشد",
          });
        }
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: {
            senf,
          },
        });
      }
      return res.status(httpStatus.BAD_REQUEST).json({ 
        statusCode: httpStatus.BAD_REQUEST,
        message: "شناسه معتبر نیست" 
      });
    } catch (error) {
      next(error);
    }
  }
  
  async update(req, res, next) {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id)) {
        return res.status(httpStatus.BAD_REQUEST).json({ 
          statusCode: httpStatus.BAD_REQUEST,
          message: "شناسه معتبر نیست" 
        });
      }
      
      await updateSenfSchema.validateAsync(req.body);
      const updatedSenf = await this.#senfService.update(id, req.body);
      
      if (!updatedSenf.matchedCount) {
        return res.status(httpStatus.NOT_FOUND).json({
          statusCode: httpStatus.NOT_FOUND,
          message: "صنف مورد نظر یافت نشد",
        });
      }
      
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        message: "بروزرسانی با موفقیت انجام شد",
      });
    } catch (error) {
      next(error);
    }
  }
  
  async delete(req, res, next) {
    try {
      const { id } = req.params;
      if (!isValidObjectId(id)) {
        return res.status(httpStatus.BAD_REQUEST).json({ 
          statusCode: httpStatus.BAD_REQUEST,
          message: "شناسه معتبر نیست" 
        });
      }
      
      const result = await this.#senfService.delete(id);
      
      if (!result.deletedCount) {
        return res.status(httpStatus.NOT_FOUND).json({
          statusCode: httpStatus.NOT_FOUND,
          message: "صنف مورد نظر یافت نشد",
        });
      }
      
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        message: "حذف با موفقیت انجام شد",
      });
    } catch (error) {
      next(error);
    }
  }
  
  async addJob(req, res, next) {
    try {
      const { senfId, jobId } = req.params;
      
      if (!isValidObjectId(senfId) || !isValidObjectId(jobId)) {
        return res.status(httpStatus.BAD_REQUEST).json({ 
          statusCode: httpStatus.BAD_REQUEST,
          message: "شناسه معتبر نیست" 
        });
      }
      
      const result = await this.#senfService.addJob(senfId, jobId);
      
      if (!result.matchedCount) {
        return res.status(httpStatus.NOT_FOUND).json({
          statusCode: httpStatus.NOT_FOUND,
          message: "صنف مورد نظر یافت نشد",
        });
      }
      
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        message: "شغل با موفقیت به صنف اضافه شد",
      });
    } catch (error) {
      next(error);
    }
  }
  
  async removeJob(req, res, next) {
    try {
      const { senfId, jobId } = req.params;
      
      if (!isValidObjectId(senfId) || !isValidObjectId(jobId)) {
        return res.status(httpStatus.BAD_REQUEST).json({ 
          statusCode: httpStatus.BAD_REQUEST,
          message: "شناسه معتبر نیست" 
        });
      }
      
      const result = await this.#senfService.removeJob(senfId, jobId);
      
      if (!result.matchedCount) {
        return res.status(httpStatus.NOT_FOUND).json({
          statusCode: httpStatus.NOT_FOUND,
          message: "صنف مورد نظر یافت نشد",
        });
      }
      
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        message: "شغل با موفقیت از صنف حذف شد",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new SenfController();
