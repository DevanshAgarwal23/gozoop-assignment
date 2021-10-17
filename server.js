import express from 'express'
import dotenv from 'dotenv'
import asyncHandler from "express-async-handler"
import connectDB from './config/db.js'
import nodemailer from 'nodemailer'
import User from "./models/userModel.js"
import path from "path"


dotenv.config()

const app = express()

const __dirname = path.resolve()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "/frontend/build")))


//Routes
app.post('/api/user', asyncHandler(async(req,res)=>{

    const { name, email, phone, country } = req.body;

    const user = await User.create({
        name,
        email,
        phone,
        country
    })

    
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'agarwaldevansh23@gmail.com',
            pass: 'agarwal2000'
        }
    })

    let mailOptions = {
        from: 'agarwaldevansh23@gamail.com',
        to: email,
        subject: 'Thanks for submitting a Request',
        text: "Hello from Beach Houch Goa"
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if(error){
            console.log(error)
        }else {
            console.log('Email sent: '+ info.response);
        }
    })


    res.json({ message: "Mail send"})

}))

const PORT = process.env.PORT || 5000

const connectServer = async(PORT) => {

    await connectDB()

    app.listen(PORT, console.log(`Server running in http://localhost:${PORT}`))
}

connectServer(PORT)