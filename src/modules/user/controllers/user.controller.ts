import { Request, Response } from 'express';
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
        return res.send('erro ao criar usuário!'); 
    }
   
}

export const login = async (req: Request, res: Response) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).send(errors);
        }
        
        const params = req.body;
        const user = await userModel.findOne({email: params.email});

        if(user.email == params.email && user.pass == params.pass){
            return res.status(200).send("OK");
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

        return res.send(user);

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

        return res.send(user);

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

        const user = await userModel.findOneAndDelete(
            { _id: req.body },
        )

        return res.send("usuário deletado");

    }catch(error){
        console.log(error);
        return res.status(500).send('Erro ao deletar usuário');
    }
}