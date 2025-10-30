import express from "express"
import { signupController ,loginController} from "../controllers/auth.controller.js";
// import { protect ,onlyUser , onlyAdmin} from "../middleware/auth.middlewere.js";
// import { makeAdminController } from "../controllers/adminController.js";

const routes = express.Router();
routes.post("/signup" , signupController);
routes.post("/login" , loginController)

// routes.put("/make-admin/:userId", makeAdminController);
// routes.put("/make-admin", makeAdminController);


// routes.get("/user",protect,onlyUser ,productDisplay)
// routes.get("/admin",protect,onlyAdmin , productUpdate)


export default routes;