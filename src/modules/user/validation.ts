import { body, ValidationChain } from 'express-validator';


export const createUserValidate: ValidationChain[] = [
    body('email')
        .exists().withMessage({id: 'required-email', message: 'Email não enviado!'})
        .isEmail().withMessage({id: 'invalid-email', message: 'Formato inválido!'})
        .bail(),
    body('pass')
        .exists().withMessage({id: 'required-password', message: 'Senha não enviada!'})
        .isLength({ min: 8 }).withMessage({id: 'invalid-password', message: 'A senha precisa ter no mínimo 8 caracteres!'}),
        
];

export const findOneValidate: ValidationChain[] = [
    body('email')
        .exists().withMessage({id: 'required-email', message: 'Email não enviado!'})
        .isEmail().withMessage({id: 'invalid-email', message: 'Formato inválido!'})

]