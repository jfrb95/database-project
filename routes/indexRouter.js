const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController.js");

indexRouter.get("/", indexController.getUsernames);

indexRouter.route("/new")
  .get(indexController.getNewUser)
  .post(indexController.postNewUser)
;

indexRouter.get("/delete", indexController.deleteAllUsers);

module.exports = indexRouter;