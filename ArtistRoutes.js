const artistcontroller = require ("../controllers/ArtistController")

const express = require ("express")
const artistrouter = express.Router()

// artist Routes

artistrouter.post("/insertartist",artistcontroller.insertartist)
artistrouter.post("/checkartistlogin",artistcontroller.checkartistlogin)

module.exports = artistrouter