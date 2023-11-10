import { Request, Response } from 'express';

const pym = [
    {nombre: "samsung", modelo: "x10", precio: 1100, pais: "corea"},
    {nombre: "iphone", modelo: "p2p", precio: 900, pais: "usa"},
    {nombre: "motorola", modelo: "h2r2", precio: 90, pais: "usa"}
];


export function getProducts( res: Response ) {
    res.send(pym)
};

export function getProductsByPrice  ( res: Response ) {
    res.send(pym.filter((prod) => prod.precio > 100));
};

export function SetNewProduct (req: Request, res: Response) {
    const newProduct = req.body;
    pym.push(newProduct);
    res.status(201).json(newProduct);
};

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

export function getProductsByModels (req: Request, res: Response) {
    const modelo = req.params.modelo;
    
    const actualizarProducto = req.body;

    const index = pym.findIndex((product) => product.modelo === modelo);
  
    if (index !== -1) {
      pym[index] = actualizarProducto;
      res.json(pym[index]);
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  };

