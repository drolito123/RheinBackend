import express from 'express';

const rout = express();
rout.get('/', (_, res) => {
    res.send("donde hubo fuego cenizas quedan");
});

export default rout;
