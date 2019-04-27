import ProductController from "./../controllers/ProductController";
/**
 * @param {*} server
 * The param is from created restify server
 */
module.exports = server => {
  /**
   * Test Route
   */
  server.get("/", (req, res) => {
    res.json("Hello world!");
  })

  server.get("/product", ProductController.index);
  server.get("/product/:id", ProductController.show);
  server.post("/product", ProductController.store);
  server.put("/product/:id", ProductController.update);
  server.del("/product/:id", ProductController.destroy);
};
