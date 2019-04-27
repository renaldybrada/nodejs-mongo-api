import restify from "restify";
import DBConnection from "./config/database";
/**
 * Creating Server
 */
const server = restify.createServer();

/**
 * Configure restify parser plugins
 * this will allow our server to parse
 * request query string and body
 */

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/**
 * Attempt DB connection
 */
 DBConnection();

/**
 * Use the routers
 */
 require("./routes/product")(server);

/**
 * Starting server on port 3000
 */
server.listen(3000, () => {
  console.log("Server started on port 3000");
});
