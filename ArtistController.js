const Artist = require ("../models/Artist")

const insertartist = async (request,response) => {
    try 
    {
      const input = await request.body;
      const artist = new Artist(input);
      await artist.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
}

const checkartistlogin = async (request, response) => 
{
     try 
     {
       const input = request.body
       const artist = await Artist.findOne(input)
       response.json(artist)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
}

module.exports = {insertartist,checkartistlogin}
