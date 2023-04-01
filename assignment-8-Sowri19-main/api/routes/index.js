import todoRouter from "./todo-router.js";

export default (app) => {
  app.use("/", todoRouter);
};
