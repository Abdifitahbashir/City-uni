
/**
 *  Backend steps
 * 
 * Install these Applications : express , nodemon , dotenv , cors, body-parser
 * create server
 * model schema
 * data
 * router
 * create api
 * 
 */




// routing is the most important part of backend





/**
 * Frontend steps
 * 
 * install react
 * install axios
 * router-dom
 * icons
 * talwindcss
 * 
 */







/*

before connectiong the frontend to the backend , install cors in the backend and axios in the frontend


there is another package called concurrent that will able you yo use frontend and backend at the same time



*/




import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './Router/TBLRouter.js'
import cors from 'cors'


const app = express()


dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/api/create/',router)
app.use('/api/read/',router)
app.use('/api/insert/',router)
app.use('/api/delete/',router)
app.use('/api/updte/',router)



mongoose.connect (process.env.mongodb).then(()=>{
    console.log("connected to database")
}).catch ((err)=>{
    console.log(err)
})
const port = process.env.port || 4000


app.listen(port,()=>{
    console.log(`server is running ${port}`)
})




