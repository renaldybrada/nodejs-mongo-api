import {ProductService} from "./../services/ProductService";

const productController = {};
/**
 * Show All Product Data
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
productController.index = async (req, res) => {
  const result = await new ProductService().list();
  res.json(result);
};

/**
 * Show product by Id
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
productController.show = async (req, res) => {
  const result = await new ProductService().show(req.params.id);
  res.json(result);
};

/**
 * Create Product
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
productController.store = async (req, res) => {
  const result = await new ProductService().store(req.body);
  res.json(result);
};

/**
 * Update Product
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
productController.update = async (req, res) => {
  const result = await new ProductService().update(req.params.id, req.body);
  res.json(result);
};

/**
 * Destroy Product
 * @param  {[type]} req [description]
 * @param  {[type]} res [description]
 * @return {[type]}     [description]
 */
productController.destroy = async (req, res) => {
  try{
    const result = await new ProductService().destroy(req.params.id);
    if(result !== null) {
      res.json("removed");
    }else{
      res.status(404);
      res.json("data not found");
    }
  }catch(exception){
    console.log(exception);
    res.status(500);
    res.json("an error occurred!");
  }
};

module.exports = productController;
