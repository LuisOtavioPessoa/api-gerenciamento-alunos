import express from "express";
import UserRoutes from "./routes/UserRoutes.js";

const port = 5000;
const server = express();

server.use(express.json());
server.use(UserRoutes);

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`);
});