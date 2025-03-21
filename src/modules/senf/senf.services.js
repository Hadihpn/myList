
const autoBind = require("auto-bind");
const { SenfModel } = require("./senf.model");

class SenfService {
  #senfModel;
  
  constructor() {
    autoBind(this);
    this.#senfModel = SenfModel;
  }

  async create(senf) {
    return await this.#senfModel.create(senf);
  }
  
  async find(query = {}) {
    return await this.#senfModel.find(query);
  }
  
  async findById(id) {
    return await this.#senfModel.findById(id);
  }
  
  async findOne(query) {
    return await this.#senfModel.findOne(query);
  }
  
  async update(id, data) {
    return await this.#senfModel.updateOne({ _id: id }, { $set: data });
  }
  
  async delete(id) {
    return await this.#senfModel.deleteOne({ _id: id });
  }
  
  async addJob(senfId, jobId) {
    return await this.#senfModel.updateOne(
      { _id: senfId },
      { $addToSet: { jobs: jobId } }
    );
  }
  
  async removeJob(senfId, jobId) {
    return await this.#senfModel.updateOne(
      { _id: senfId },
      { $pull: { jobs: jobId } }
    );
  }
}

module.exports = new SenfService();
