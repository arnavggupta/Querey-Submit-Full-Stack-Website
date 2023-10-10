const mongoose=require("mongoose");
const validator=require("validator");
const submitschema= mongoose.Schema({
name:{
type:String,
required:true,
minlength:3
},
email:{
type:String,
required:true,
validator(value){
    if(!validator.isEmail(value)){
        throw new Error("invalid email id");
    }
}
},
message:{
    type:String,
    required:true,
    minlength:3
}




})

const savedata= new mongoose.model("savedata",submitschema);


module.exports=savedata;
