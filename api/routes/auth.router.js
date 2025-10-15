import express from "express"
import { signupController ,loginController, productDisplay } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middlewere.js";
import { makeAdminController } from "../controllers/adminController.js";

const routes = express.Router();
routes.post("/signup" , signupController);
routes.post("/login" , loginController)

// routes.put("/make-admin/:userId", makeAdminController);
routes.put("/make-admin", makeAdminController);
routes.get("/test",protect,productDisplay)


export default routes;