import express from "express";
import cors from 'cors';
import mongoose from 'mongoose' 


import postsRouter from "./routes/postsrouter.js";

const app=express();




app.use(express.json({limit :"30mb", extended : true}))
app.use(express.urlencoded({ limit:"30mb"   , extended : true}))
app.use(cors())

app.use('/posts',postsRouter)


// const url =  "mongodb+srv://memories:memories123@cluster0.ghago.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const url = "mongodb+srv://memories:memories123@cluster0.ghago.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000 ;
mongoose.connect(url , {useNewUrlParser : true , useUnifiedTopology : true}) // extra arguments are to avoid errors
.then(()=> app.listen(PORT,()=>console.log( `Server runnning on port no ${PORT} ....`)))
.catch((err)=>console.log(err.message + "err"))

// mongoose.set('useFindAndModify', false );