const autoBind = require("auto-bind");
const { UserModel } = require("./user.model");
class UserService { 
   #userModel;
  constructor() {
    autoBind(this)
    this.#userModel = UserModel;
    
  }

  async create(user) {
    return await this.#userModel.create(user);i
  }
  async find(query = {}) {
    return await this.#userModel.find(query);
  }
  async findById(id) {
    return await this.#userModel.findById(id);
  }
  async findOne(query) {
    return await this.#userModel.findOne(query);
  }
  async update(id, data) {
    return await this.#userModel.updateOne({ _id: id }, { $set: data });
  }
  async delete(id) {
    return await this.#userModel.deleteOne({ _id: id });
  }
}
module.exports = new UserService();
