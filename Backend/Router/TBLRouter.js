import express from 'express'
import CS1922 from '../ModelSchema/TblSchema.js'
import data from '../data.js'
const router = express.Router()


router.get('/' , async(req , res )=>{
    await CS1922.removeAllListeners({})
const qaad = await CS1922.insertMany(data.sttd)
res.send({qaad})
})

router.get('/all' , async(req , res)=>{
    const sooaqri = await CS1922.find()
    res.send(sooaqri)
})



router.post("/dhig" , async(req , res) =>{
    const kudar = new CS1922({
        
            EmpID: req .body .EmpID,
            Name : req .body .Name,
            Tell : req .body .Tell,
            Depart : req .body .Depart,
            semester : req .body .semester,
            shift : req .body .shift
    })
    await kudar.save();
    res.send("Data has been successful")
})


router.delete("/:EmpID" , async(req ,res)=>{
    try {   
    const id = req.params.id 

    const reslt = await CS1922.findOneAndDelete({id});
    if(!res){
        return res.status(404).send("record not found");
    }

    res.send("your action was successful");
}    catch(err){
    console.error(err);
    res.status(500).send("server error!");

}
})



router.put("/:id", async(req , res)=>{
    try{
        const update = await CS1922.findByIdAndUpdate(req.params.id , req.body , {new : true})
        if(!update){
            return res.status(404).json({error: "Record not found!"})
        }
        res.json(update)
    }catch(err){
        console.error("Error updating employee")
        res.status(500).json({error : "Failed updating employee", details : err.message})
    }
})


export default router;