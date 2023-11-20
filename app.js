const express = require("express")
app = express()
const port =4000;
const pool = require("./Config/database")


app.use(express.json());


const userRoute = require("./Api/Routes/use.route")

app.use(userRoute);
app.get("/test",(req , res )=>{
res.end("its working ")

})
app.listen(port,()=>{
    console.log(`app listing on ${port}`)

})
