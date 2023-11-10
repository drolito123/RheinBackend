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