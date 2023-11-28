import { Request, Response } from 'express';
import { AppDataSource } from '../config';
import { Db } from '../db/db';
import { Remera } from '../models/producs';
import { logdata } from '../models/logdata';


export const getAll = async () => {
    await Db.getAll();
}

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


export const GetRemeras = async (_: Request, res: Response) => {
    try {
        const remeras = await AppDataSource.manager.find(Remera);
        res.json(remeras);
    } catch (error) {
        console.error('Error al obtener remeras:', error);
        res.status(500).json({ error: 'Error al obtener remeras' });
    }
}


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

