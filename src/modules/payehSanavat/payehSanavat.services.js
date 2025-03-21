const autoBind = require("auto-bind");
const { PayehSanavatModel } = require("./payehSanavat.model");
class PayehSanavatServices {
 #payehSanavatModel;
  constructor(){
    autoBind(this);
    this.#payehSanavatModel = PayehSanavatModel
  }
  async create(data) {
    const result = await this.#payehSanavatModel.create(data);
    return result;
  }
  async getAll() {
    const result = await this.#payehSanavatModel.find({}, { year: 1, dailySanavat: 1, _id: 1 });
    return result;
  }
  async getByYear(year) {
    const result = await this.#payehSanavatModel.findOne({ year }, { year: 1, dailySanavat: 1, _id: 1 });
    return result;
  }
  async getById(id) {
    const result = await this.#payehSanavatModel.findOne({ _id: id }, { year: 1, dailySanavat: 1, _id: 1 });
    return result;
  }
  async delete(id) {
    const result = await this.#payehSanavatModel.deleteOne({ _id: id });
    return result;
  }
  async update(id, data) {
    const result = await this.#payehSanavatModel.updateOne({ _id: id }, { $set: data });
    return result;
  }
  async updatePrice(oldPrice, newPrice) {
    const result = await this.#payehSanavatModel.updateOne(
      { dailySanavat: oldPrice },
      { $set: { dailySanavat: newPrice } }
    );
    return result;
  }
}
module.exports = new PayehSanavatServices();
