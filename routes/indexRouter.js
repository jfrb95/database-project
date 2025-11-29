const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController.js");

indexRouter.get("/", indexController.getAvailableUsernames);

indexRouter.route("/new")
  .get(indexController.getNewUser)
  .post(indexController.postNewUser)
;

module.exports = indexRouter;