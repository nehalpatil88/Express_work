const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

require("dotenv").config();

const userRoutes=require("./routes/userRoutes");

const app=express();

//middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.use("/users",userRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`server running on port ${PORT}`));