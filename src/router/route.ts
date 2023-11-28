import express from 'express';
import { eliminarProducto, GetRemeras, LogDataController, LogInController } from '../controlers/controler';

const rout = express.Router();
rout.get('/', (_, res) => {
    res.send("working");
});
const logDataController = new LogDataController();

rout.get('/remeras', GetRemeras);

rout.delete('/remeras/deleteR/:name', eliminarProducto);

rout.get("/logdata", logDataController.getAll.bind(logDataController));

rout.post("/logdata", logDataController.create.bind(logDataController));

rout.post('/login', LogInController.logIn);

export default rout;
