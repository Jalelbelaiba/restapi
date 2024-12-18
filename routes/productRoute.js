const express = require("express");
const router = express.Router();
const {createProduct, getProduct} =require("../controllers/productControllers")



router.post("/createProduct", createProduct)
 router.get("/getProduct", getProduct)
// router.put("/updateProduct/id")
// router.delete("/deleteProduct/id")


module.exports = router;