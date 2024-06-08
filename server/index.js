import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import{UserRouter} from './routes/user.js'



const app = express()



app.use(express.json())
app.use(cors({
    origin: ["https://bismilh-ffxi.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', UserRouter)



mongoose.connect(process.env.MONGODB_URL)


app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})
