const { KarfarmaModel } = require("../../modules/karfarma/karfarma.model");
class KarfarmaServices {
  #karfarmaModel;
  constructor() {
    this.#karfarmaModel = KarfarmaModel;
  }
  async create(data) {
    return await this.#karfarmaModel.create(data);
  }
  async find() {
    return await this.#karfarmaModel.find({});
  }
  async findById(id) {
    return await this.#karfarmaModel.findById(id);
  }
  async findByNationalCode(id) {
    return await this.#karfarmaModel.findOne({ nationalCode: id });
  }
  async findOne(data) {
    return await this.#karfarmaModel.findOne(data);
  }
  async update(id, data) {
    return await this.#karfarmaModel.updateOne({ _id: id }, { $set: data });
  }
  async delete(id) {
    return await this.#karfarmaModel.deleteOne({ _id: id });
  }
}
module.exports = {
  KarfarmaServices: new KarfarmaServices(),
};
