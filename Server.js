const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")

const dburl = "mongodb://localhost:27017/gallerydb"

mongoose.connect(dburl).then(() => {
    console.log("Connected to DB Successfully")
}).catch((e) => {
    console.log(e.message)
});

const app = express()
app.use(express.json())   
app.use(cors())

const adminrouter = require ("./routes/AdminRoutes")
const customerrouter  = require ("./routes/CustomerRoutes")

app.use("",customerrouter)
app.use("",adminrouter)   

const port = 2032
app.listen(port, () => {
    console.log("Server is running at port:"+port)
})