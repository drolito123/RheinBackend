import express from 'express';
import rout from "./router/route";
import "reflect-metadata";
import "./config"
import bodyParser from "body-parser";



const app = express();
const port = 8080;
const cors = require('cors');
const helmet = require('helmet');
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/", rout);

app.listen(port, () =>{
    console.log(`server is listening on ${port}`);
});

app.use(bodyParser.json());
