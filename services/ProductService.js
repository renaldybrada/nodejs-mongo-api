import ProductModel from "./../models/ProductModel";

export class ProductService {

  /**
   * Get list product data
   * @return {[type]} [description]
   */
  async list() {
    return await ProductModel.find();
  }

  /**
   * Show data by id
   * @param  {[type]} id [description]
   * @return {[type]}    [description]
   */
  async show(id) {
    return await ProductModel.findById(id);
  }

  /**
   * Store product to DB
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */
  async store(data) {
    return await ProductModel.create(data).then(result => {
      return result;
    }).catch(error => {
      throw error;
    });
  }

  /**
   * update data by ID
   * @param  {[type]} id   [description]
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */
  async update(id, data) {
    return await ProductModel.findByIdAndUpdate(id, {
      $set: data
    }, {
      new: true // return updated data
    });
  }

  /**
   * Delete data by ID
   * @param  {[type]} id [description]
   * @return {[type]}    [description]
   */
  async destroy(id){
    // return await ProductModel.findByIdAndRemove(id).then(result => {
    //   if(result !== null){
    //     return "Removed Successfully!";
    //   }else{
    //     throw new Error('Data not found!');
    //   }
    // }).catch(error => {
    //   throw error;
    // });
    return await ProductModel.findByIdAndRemove(id);
  }
}
