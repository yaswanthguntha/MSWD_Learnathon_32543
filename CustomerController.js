const Customer = require ("../models/Customer")

const insertcustomer = async (request,response) => {
    try 
    {
      const input = await request.body;
      const customer = new Customer(input);
      await customer.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
}

const checkcustomerlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const customer = await Customer.findOne(input)
       response.json(customer)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

module.exports = {insertcustomer,checkcustomerlogin}