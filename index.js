import express from "express";
import { montadoras, veiculos } from "./dados.js";

const app = express();

app.get('/', (req, res)=>{
    res.json({"status":"ok"});
})

app.listen(3030);