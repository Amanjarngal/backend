import express from "express"
import { createProduct, getAllProducts } from "../controllers/product.controller.js";
import upload from "../middleware/multer.js";

const routes = express.Router();
routes.post("/", upload.single("image"), createProduct );
routes.get("/all",getAllProducts);

export default routes;