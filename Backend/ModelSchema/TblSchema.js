import mongoose from "mongoose";



const createschema = mongoose.Schema({
    EmpID : {type:Number, required : true  },
    Name : {type:String, required : true  },
    Tell : {type:Number, required : true  },
    Depart : {type:String, required : true },
    semester : {type:Number, required : true },
    shift : {type:String, required : true },
},{
    timestamps:true
})









const CS1922 =  mongoose.model("CS1922" , createschema)

export default CS1922

