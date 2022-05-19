//Import express
const express = require("express");

//Import supplier-controller
const supplierController = require("./../controllers/supplier-controller");

//Create a router
const router = express.Router()

//Add route for get all suppliers
router.get("/", supplierController.getAllSuppliers);

//Add route for post a supplier
router.post("/", supplierController.postSupplier);

//Export router
module.exports = router;