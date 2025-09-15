import {WebSocketServer} from "ws"
import {  prisma } from '@repo/db/client'


const server= new WebSocketServer({
    port:8080
})

server.on("connection",async (socket)=>{
    
    const user=await prisma.users.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })

    socket.send(`new user created userId= ${user.id}`)
})