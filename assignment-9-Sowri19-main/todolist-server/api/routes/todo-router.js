import express from "express";
import * as todoController from "./../controllers/todo-controller.js";
const router = express.Router();

//Defining the router
router.route("/todos").post(todoController.post).get(todoController.all);
router
  .route("/todos/:id")
  .get(todoController.get)
  .put(todoController.modify)
  .delete(todoController.remove);
export default router;
