import express from "express";
import cadastro from './rotas/cadastor'

const server = express();

server.get("/", (_, res) => {
  res.send("Hello ts-node!");
});

server.get("/cadastrar", cadastro)

export default server;