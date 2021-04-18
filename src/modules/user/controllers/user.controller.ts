import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import {JWT_SECRET} from '../../../config/jwt';


import { validationResult } from 'express-validator';
import userModel from '../models/user.model';

export const create = async (req: Request, res: Response) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).send(errors);
        }

        const user = await userModel.create(req.body);

        return res.send(user.serialize());
    }catch(error){
        console.log(error);
        return res.status(500).send('erro ao criar usuário!'); 
    }
   
}

export const login = async (req: Request, res: Response) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).send(errors);
        }
        
        const params = req.body;
        const {email, pass} = await userModel.findOne({email: params.email});
        const serializeUser = {
            email: email,
            pass: pass
        }

        if(email == params.email && pass == params.pass){
            const token = jwt.sign(serializeUser, JWT_SECRET,{ expiresIn: (60 * 60)*24 }); 
            return res.status(200).json({
                "status": "OK",
                "token": token
            });
        }else{
            return res.status(400).send("Erro no usuario e senha! Tente novamente");
        }

    }catch(error){
        console.log(error);
        return res.status(500).send('Ocorreu um erro inesperado, tente novamente!');
    }
}

export const find = async (req: Request, res: Response) => {
    try{
        const data: any = req.query.name;

        const user = await userModel.find({name: data});
        if(user.length == 0){
            return res.status(400).send('erro ao encontrar o usuario!');
        }
        const result = user.map(obj => {
            return obj.serialize()
        })
        return res.send(result);

    }catch(error){
        res.status(500).send("Ocorreu um erro inesperado, tente novamente!");
    }
}

export const update = async (req: Request, res: Response) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).send(errors);
        }

        const user = await userModel.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, overwrite: true}
        );

        return res.send(user.serialize());

    }catch(error){
        console.log(error);
        return res.status(500).send('Erro ao atualizar usuário');
    }
  
}

export const deleteUser = async (req: Request, res: Response) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).send(errors);
        }

        await userModel.findOneAndDelete(
            { _id: req.body },
        )

        return res.send("usuário deletado");

    }catch(error){
        console.log(error);
        return res.status(500).send('Erro ao deletar usuário');
    }
}