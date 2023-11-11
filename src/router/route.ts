import express from 'express';
import { getProducts, getProductsByPrice, SetNewProduct, ModifyProduct, getProductsByContry, DeleteProductByModel, getProductsByPriceTwo } from '../controlers/controler';

const rout = express.Router();
rout.get('/', (_, res) => {
    res.send("working");
});

//1 obtener todos los productos

rout.get("/products", getProducts);

//2 obtener todos los productos cuyo precio sea mayor a 100

rout.get("/products/precio", getProductsByPrice);

//3modificar un producto exsistente 

rout.put('/products/name/:nombre', ModifyProduct);

//4 eliminar un producto por su modelo

rout.delete('/products/delete/:modelo', DeleteProductByModel)

//5 obtener un producto por su pais de origen

rout.get('/products/contry/:pais',getProductsByContry );

//6 obtener un producto por su precio

rout.get("/productos/precio/:precio", getProductsByPriceTwo );

//7 crear un nuevo producto siempre y cuando posea las mismas claves que los productos restantes

rout.post('/products/model/:modelo', SetNewProduct );

export default rout;
