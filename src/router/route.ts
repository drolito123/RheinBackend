import express from 'express';
import { getProducts, getProductsByPrice, SetNewProduct, ModifyProduct, getProductsByModels } from '../controlers/controler';

const rout = express.Router();
rout.get('/', (_, res) => {
    res.send("working");
});

const pym = [
    {nombre: "samsung", modelo: "x10", precio: 1100, pais: "corea"},
    {nombre: "iphone", modelo: "p2p", precio: 900, pais: "usa"},
    {nombre: "motorola", modelo: "h2r2", precio: 90, pais: "usa"}
];

rout.get("/products", getProducts);

rout.get("/products/precio", getProductsByPrice);

rout.post('/products/model/:modelo', SetNewProduct );

rout.put('/products/name/:nombre', ModifyProduct);

rout.put('/pym/:modelo',getProductsByModels );

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

rout.get("/pym/pais/:pais", (req, res) => {

const pais = req.params.pais;

const product = pym.find((p) => p.pais === pais);
if (product) {
    res.json(product);
} else {
    res.status(404).json({ message: "Producto no encontrado" });
}
});

rout.get("/pym/precio/:precio", (req, res) => {
const precio = parseInt(req.params.precio);
const product = pym.find((p) => p.precio === precio);
if (product) {
    res.json(product);
} else {
    res.status(404).json({ message: "Producto no encontrado" });
}
});
