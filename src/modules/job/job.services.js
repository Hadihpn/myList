const autoBind = require("auto-bind");
const { JobModel } = require("./job.model");
class JobServices {
 #jobModel;
  constructor(){
    autoBind(this);
    this.#jobModel = JobModel
  }
  async create(data) {
    data.title = data.title.trim().lowerCase();
    const result = await this.#jobModel.create(data);
    return result;
  }
  async getAll() {
    const result = await this.#jobModel.find({});
    return result;
  }
  async getByTitle(title) {
    const result = await this.#jobModel.findOne({ title });
    return result;
  }
  async getById(id) {
    const result = await this.#jobModel.findOne({ _id: id });
    return result;
  }
  async delete(id) {
    const result = await this.#jobModel.deleteOne({ _id: id });
    return result;
  }
  async update(id, data) {
    const result = await this.#jobModel.updateOne({ _id: id }, { $set: data });
    return result;
  }
  async updatePrice(oldPrice, newPrice) {
    const result = await this.#jobModel.updateMany(
      { dailySalary: oldPrice },
      { $set: { dailySalary: newPrice } }
    );
    return result;
  }
}
module.exports = new JobServices();
