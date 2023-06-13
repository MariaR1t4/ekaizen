import express, { response } from "express";
import path from "path";
import { random, seed } from "./randomGeneratedNumber.js";
import lista from "./index.js";
// I used express to make the routes
const app = express();
app.use(express.json());

app.get('/', (req, res) =>{
    //this is the function from index.js file
    const _seed = seed(192837465);
    let map = lista();
    const resposta = [];
    Object.keys(map).forEach(k=>
        resposta.push(map[k]))
    res.json(resposta);
})
app.listen(38000, () => console.log("Inicializou servidor")); 

