import express from 'express';

const rout = express.Router();
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

rout.post('/ny', (req, res) => {
    const newProduct = req.body;
    pym.push(newProduct);
    res.status(201).json(newProduct);
});

rout.put('/pym/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    const { newname, newmodel, newprice, newcountry } = req.body;

    const i = pym.findIndex(product => product.nombre === nombre);
    
    if (i !== -1) {
        pym[i].nombre = newname;
        pym[i].modelo = newmodel;
        pym[i].precio = newprice;
        pym[i].pais = newcountry;
      
        res.send('Producto actualizado correctamente');
    } else {
        res.send('Producto no encontrado');
    }
});

rout.put('/pym/:modelo', (req, res) => {
    const model = req.params.modelo;

    const i = pym.findIndex(modelo => modelo.nombre === model);
    
    if (i !== -1) {
        pym.splice(i, 1)
        res.send('Producto Eliminado');
    } else {
        res.send('Producto no encontrado');
    }
});

rout.put('/pym/precio/:precio', (req, res) => {
    const precio = req.params.precio;

    const i = pym.findIndex(price => price.nombre === precio);
    
    if (i !== -1) {
        pym.splice(i, 1)
        res.send('Producto Eliminado');
    } else {
        res.send('Producto no encontrado');
    }
});

export default rout;