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

        return res.send(user.serialize());
    }catch(error){
        console.log(error);
        return res.send('erro ao criar usuário!'); 
    }
   
}

export const findOne = async (req: Request, res: Response) => {
    const data: any = req.query.name;
    
    const user = await userModel.find({name: data});

    return res.send(user);
}

export const update = async (req: Request, res: Response) => {
    return 0
}