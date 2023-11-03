import express from 'express';
import rout from "./router/route";

const app = express();
const port = 8080;
app.use(express.json());
app.use("/", rout);

app.listen(port, () =>{
    console.log(`server is listening on ${port}`);
});

