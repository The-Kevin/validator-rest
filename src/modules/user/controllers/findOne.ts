import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import userModel from '../models/user.model';

const findOne = (req: Request, res: Response) => {
    const id = req.params.id;
    
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).send(errors);
            
        }

        userModel.findOne({'email': id}, function (err, person){
            if(err){ res.status(404).send('Usuário não encontrado!') };
            if(person){
                res.send(person);
            }
        })
    }catch(error){
        res.status(400).send('Usuário não encontrado!');
        console.log(error);
    }
    
}


export default findOne;