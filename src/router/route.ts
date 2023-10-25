import express from 'express';

const rout = express();
rout.get('/', (_, res) => {
    res.send("donde hubo fuego cenizas quedan");
});

const pym = [
    {nombre: "samsung", modelo: "x10", precio: 1100, pais: "corea"},
    {nombre: "iphone", modelo: "p2p", precio: 900, pais: "usa"},
    {nombre: "motorola", modelo: "h2r2", precio: 90, pais: "usa"}
];

rout.get('/ny', (_, res) => {
    res.send(pym.filter((prod) => prod.precio > 100));
});


export default rout;
