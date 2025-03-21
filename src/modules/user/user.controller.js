const autoBind = require("auto-bind");
const { StatusCodes: httpStatus } = require("http-status-codes");
const  UserService  = require("./user.services");
const { createUserSchema } = require("../../common/validator/user.schema");
const { isValidObjectId } = require("mongoose");
class UserController {
  #userService;
  constructor() {
    autoBind(this);
    this.#userService = UserService;
  }
  async create(req, res, next) {
    try {
      await createUserSchema.validateAsync(req.body);
      const user = await this.#userService.create(req.body);
      return res.status(httpStatus.CREATED).json({
        statusCode: httpStatus.CREATED,
        data: {
          user,
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async find(req, res, next) {
    try {
      const users = await this.#userService.find(req.query);
      return res.status(httpStatus.OK).json({
        statusCode: httpStatus.OK,
        data: {
          users,
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
        const user = await this.#userService.findById(id);
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: {
            user,
          },
        });
      }
      return res.status(httpStatus.BAD_REQUEST).json({ message: "Invalid Id" });
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      const { id } = req.params;
      if (isValidObjectId(id)) {
        await createUserSchema.validateAsync(req.body);
        const user = await this.#userService.update(id, req.body);
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: {
            user,
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
        const user = await this.#userService.delete(id);
        return res.status(httpStatus.OK).json({
          statusCode: httpStatus.OK,
          data: {
            user,
          },
        });
      }
      return res.status(httpStatus.BAD_REQUEST).json({ message: "Invalid Id" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new UserController();
