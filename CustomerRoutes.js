const customercontroller = require ("../controllers/CustomerController")

const express = require ("express")
const customerrouter = express.Router()

// customer Routes

customerrouter.post("/insertcustomer",customercontroller.insertcustomer)
customerrouter.post("/checkcustomerlogin",customercontroller.checkcustomerlogin)

module.exports = customerrouter