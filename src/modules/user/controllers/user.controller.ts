import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import userModel from '../models/user.model';


export const create = async (req: Request, res: Response) => {
    try{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            res.status(400).send(errors);
        }
        const user = await userModel.create(req.body);

         res.send(user.serialize());
    }catch(error){
        res.send('erro ao criar usuário!');
        console.log(error);
    }
   
}

export const findOne = async (req: Request, res: Response) => {
   
}