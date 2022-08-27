import { Router } from "express";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/users/:id", userRoutes)

export { routes };