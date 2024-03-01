import express from "express"
const app=express()
app.get("/",(request,response)=>{return response.status(200).json({message: "Server Funcionando"})})
app.listen(3333,()=>{console.log("Servidor Rodando: http://localhost:3333")})