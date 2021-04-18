import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../../config/jwt';

export const auth = (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token']; 


    try{
        jwt.verify(token, JWT_SECRET, (err: Error) => {
            if(err){
                return res.status(400).send('Token inválido!');
            }
            next();
        })
    }catch(error){
        console.log(error)
        return res.status(400).send({
            "status": 400,
            "message": "Não há token!"
        })
    }
   
}