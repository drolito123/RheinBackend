import { Request, Response } from 'express';
import { AppDataSource } from '../config';
import { Db } from '../db/db';
import { Remera } from '../models/producs';
import { logdata } from '../models/logdata';
import { Compra } from '../models/compra';


export const getAll = async () => {
    await Db.getAll();
}

//esto es para eliminar productos de la base de datos segun el nombre

export const eliminarProducto = async (req: Request, res: Response) => {
    const { name } = req.params;
  
    try {
    const entityManager = AppDataSource.manager;
    const product = await entityManager.findOne(Remera, { where: { name } });

    if (!product) {
        return res.status(404).send(`product ${name} not found`);
    }

        await entityManager.remove(product);
        return res.send(`product ${name} deleted successfully`);
} catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
}
};

//este es el controlador para poder mostrar mis productos en el front

export const GetRemeras = async (_: Request, res: Response) => {
    try {
        const remeras = await AppDataSource.manager.find(Remera);
        res.json(remeras);
    } catch (error) {
        console.error('Error al obtener remeras:', error);
        res.status(500).json({ error: 'Error al obtener remeras' });
    }
}

//este es el controlador para el registro y lo que hace es que agarra todos los datos del formulario y los mete en una tabla de mysql

export class LogDataController {
    private logDataRepository = AppDataSource.getRepository(logdata);
  
    async getAll(_: Request, res: Response) {
      const logData = await this.logDataRepository.find();
      res.json({ success: true, message: 'Data retrieved successfully', data: logData });
    }
  
    async create(req: Request, res: Response) {
      const { mail, password, username } = req.body;
      const newLogData = this.logDataRepository.create({ mail, password, username });
      
      try {
        await this.logDataRepository.save(newLogData);
        res.json({ success: true, message: 'User registered successfully', data: newLogData });
      } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
      }
    }
  }

//este es el controlador para el login que lo que hace es que verifica si los datos con los que estoy iniciando secion exsisten, es decir que fueron previamente registrados

export class LogInController {
  static logIn = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
      const userRepository = AppDataSource.getRepository(logdata);
      const user = await userRepository.findOne({
        where: { username, password },
      });

      if (user) {
        res.status(200).json({ success: true, message: 'Login successful', user });
      } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };
}

//esta es el controlador que lo que hace es que me convierte todos los items que tengo en el carrito a un json y los manda a una tabla de mysql con un metodo post

export class CompraController {
  static createCompra = async (req: Request, res: Response) => {
    try {
      const { items, total } = req.body;

      const filteredItems = items.map((item: any) => ({ id: item.id, quantity: item.quantity }));

      const compraRepository = AppDataSource.getRepository(Compra);
      const newCompra = compraRepository.create({ items: JSON.stringify(filteredItems), total });
      await compraRepository.save(newCompra);

      res.status(201).json(newCompra);
    } catch (error) {
      console.error('Error al realizar la compra:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
}


