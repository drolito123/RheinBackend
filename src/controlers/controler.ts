import { Request, Response } from 'express';

const pym = [
    {nombre: "remera", modelo: "1314", precio: 1100, pais: "arg"},
    {nombre: "pantalon", modelo: "p2p", precio: 900, pais: "arg"},
    {nombre: "buzo", modelo: "h2r2", precio: 90, pais: "arg"}
];


//1

export function getProducts( res: Response ) {
    res.send(pym)
};

//2

export function getProductsByPrice  ( res: Response ) {
    res.send(pym.filter((prod) => prod.precio > 100));
};

//3

export function ModifyProduct (req: Request, res: Response) {
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
};

//4

export function DeleteProductByModel (req: Request, res: Response) {
const modelo = req.params.modelo;
const index = pym.findIndex((product) => product.modelo === modelo);

if (index !== -1) {
    pym.splice(index, 1);
    res.json({ message: "Producto eliminado" });
} else {
    res.status(404).json({ message: "Producto no encontrado" });
}
};

//5

export function getProductsByContry (req: Request, res: Response) {
const pais = req.params.pais;
const product = pym.find((p) => p.pais === pais);
if (product) {
    res.json(product);
} else {
    res.status(404).json({ message: "Producto no encontrado" });
}
};

//6

export function getProductsByPriceTwo (req: Request, res: Response) {
const precio = parseInt(req.params.precio);
const product = pym.find((p) => p.precio === precio);
if (product) {
    res.json(product);
} else {
    res.status(404).json({ message: "Producto no encontrado" });
}
};

//7

export function SetNewProduct (req: Request, res: Response) {
const nuevoProducto = req.body;
const mismaskeys = pym.every(
    (product) => Object.keys(product).sort().toString() === Object.keys(nuevoProducto).sort().toString()
);

if (mismaskeys) {
    pym.push(nuevoProducto);
    res.json(nuevoProducto);
} else {
    res.status(400).json({ message: "El nuevo producto debe tener las mismas claves que los productos existentes" });
}
};

