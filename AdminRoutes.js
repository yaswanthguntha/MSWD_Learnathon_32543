const admincontroller = require ("../controllers/AdminController")

const express = require ("express")
const adminrouter = express.Router()

// admin Routes

adminrouter.get("/viewcustomers",admincontroller.viewcustomers)
adminrouter.delete("/deletecustomer/:email",admincontroller.deletecustomer)


adminrouter.get("/viewartist",admincontroller.viewartist)
adminrouter.delete("/deleteartist/:email",admincontroller.deleteartist)


adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)

module.exports = adminrouter