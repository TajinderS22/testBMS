import express from 'express';
import { prisma } from '@repo/db/client'

const app=express();
app.use(express.json())

app.get('/',async(req,res)=>{
    res.send("hi there")
})

app.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;



    const user=await prisma.users.create({
        data:{
            username,password
        }

    })


    res.json({
        message:"registered successfully",
        id:user.id
    })


})

app.listen(3001,()=>{
    console.log("server live on port ",3001)
})