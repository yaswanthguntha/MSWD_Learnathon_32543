const Customer = require ("../models/Customer")
const Artist = require ("../models/Artist")
const Admin = require ("../models/Admin")

const viewcustomers = async (request,response) => 
{
    try
    {
        const customers = await Customer.find()
        if(customers.length == 0)
        {
            response.send("NO CUSTOMER REGISTERED YET")
        }
        else
        {
            response.json(customers)
        }
    }
    catch(e)
    {
        response.status(500).send(e.message)
    }
}

const deletecustomer = async (request, response) => 
  {
     try 
     {
       const email = request.params.email
       const customer = await Customer.findOne({"email":email})
       if(customer!=null)
       {
         await Customer.deleteOne({"email":email})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send("Email ID Not Found")
       }
 
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

   const viewartist = async (request,response) => 
   {
    try
    {
        const artists = await Artist.find()
        if(artists.length == 0)
        {
            response.send("NO ARTIST REGISTERED YET")
        }
        else
        {
            response.json(artists)
        }
    }
    catch(e)
    {
        response.status(500).send(e.message)
    }
}

const deleteartist = async (request, response) => 
  {
     try 
     {
       const email = request.params.email
       const artist = await Artist.findOne({"email":email})
       if(artist!=null)
       {
         await Artist.deleteOne({"email":email})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send("Email ID Not Found")
       }
 
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
 
   const checkadminlogin = async (request, response) => 
   {
      try 
      {
        const input = request.body
        console.log(input)
        const admin = await Admin.findOne(input)
        response.json(admin)
      } 
      catch (error) 
      {
        response.status(500).send(error.message);
      }
    };


module.exports = {viewcustomers,deletecustomer,checkadminlogin,deleteartist,viewartist}