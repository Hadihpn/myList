const autoBind = require("auto-bind");
const { SanavatModel } = require("./sanavat.model");
class SanavatServices {
 #sanavatModel;
  constructor(){
    autoBind(this);
    this.#sanavatModel = SanavatModel
  }
  async create(data) {
    const result = await this.#sanavatModel.create(data);
    return result;
  }
  async getAll() {
    const result = await this.#sanavatModel.find({});
    return result;
  }
  async getByYear(year) {
    const result = await this.#sanavatModel.findOne({ year });
    return result;
  }
  async getById(id) {
    const result = await this.#sanavatModel.findOne({ _id: id });
    return result;
  }
  async delete(id) {
    const result = await this.#sanavatModel.deleteOne({ _id: id });
    return result;
  }
  async update(id, data) {
    const result = await this.#sanavatModel.updateOne({ _id: id }, { $set: data });
    return result;
  }
  async updatePrice(oldPrice, newPrice) {
    const result = await this.#sanavatModel.updateOne(
      { dailySanavat: oldPrice },
      { $set: { dailySanavat: newPrice } }
    );
    return result;
  }
}
module.exports = new SanavatServices();
