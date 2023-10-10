
require("dotenv").config();
const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const mongoose=require("mongoose");
 const connectdb=require("./db/conn");
const savedata=require("./models/colln");

const port=process.env.port||3000         

const staticpath=path.join(__dirname+"/public");
const partialpath= path.join(__dirname+"/partials");
app.set("view engine","hbs");
app.use(express.static(staticpath));
hbs.registerPartials(partialpath);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
connectdb();
// app.use("/css",express.static(path.join(__dirname,"/node_modules/bootstrap/dist/css")));
// app.use("/js",express.static(path.join(__dirname,"/node_modules/bootstrap/dist/js")));
// app.use("/jq",express.static(path.join(__dirname,"/node_modules/jquery/dist")));


app.get("/",(req,res)=>{
res.render("index");
})
app.get("/home",(req,res)=>{
    res.render("index");
})
app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.get("/about",(req,res)=>{
res.render("about");
})

app.post("/submit",async(req,res)=>{
    try{
const userdata= new savedata(req.body);
await userdata.save();
res.render("index");
    }
    catch(err){
       res.send(err);
    }
})

app.listen(port,()=>{
console.log(`server is connected at ${port} sucessfully`);
})