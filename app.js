const express = require("express")
app = express()
const port =4000;
const pool = require("./Config/database")

app.use(express.json());


const userRoute = require("./Api/Routes/use.route")

app.use(userRoute);

app.listen(port,()=>{
    console.log(`app listing on ${port}`)

})
