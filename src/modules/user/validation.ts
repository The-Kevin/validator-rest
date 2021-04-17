import { body, ValidationChain } from 'express-validator';
import userModel from './models/user.model';


export const createUserValidate: ValidationChain[] = [
    body('email')
        .exists().withMessage({id: 'required-email', message: 'Email não enviado!'})
        .isEmail().withMessage({id: 'invalid-email', message: 'Formato inválido!'})
        .custom(async value => {
            try{
                const find = await userModel.findOne({email: value})
                if(find){
                    return Promise.reject("Email ja esta sendo usado!");          
                }
            }catch(e){
                console.log('novo usuario criado!')
            }
        })
        .bail(),
    body('pass')
        .exists().withMessage({id: 'required-password', message: 'Senha não enviada!'})
        .isLength({ min: 8 }).withMessage({id: 'invalid-password', message: 'A senha precisa ter no mínimo 8 caracteres!'})
        .isLength({ max: 12 }).withMessage({id: 'invalid-password', message: 'A senha precisa ter no máximo 12 caracteres!'})
        .bail(),

];

export const updateValidade: ValidationChain[] = [
    body('email')
      .exists().withMessage({id: 'required-email', message: 'Email não enviado!'})
      .isEmail().withMessage({id: 'invalid-email', message: 'Formato inválido!'})
      .custom(async value => {
        try{
            const find = await userModel.findOne({email: value})
            if(find){
                return Promise.reject("Email ja esta sendo usado!");
                
            }
        }catch(e){
            console.log(`Um usuário foi alterado no banco de dados! ${Date.now}`);
        }
    })
    .bail(),

    body('pass')
    .exists().withMessage({id: 'required-password', message: 'Senha não enviada!'})
    .isLength({ min: 8 }).withMessage({id: 'invalid-password', message: 'A senha precisa ter no mínimo 8 caracteres!'})
    .isLength({ max: 12 }).withMessage({id: 'invalid-password', message: 'A senha precisa ter no máximo 12 caracteres!'})
    .bail(),
]