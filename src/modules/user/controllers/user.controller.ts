import {model} from 'mongoose';
import userSchema from '../models/user.schema';

const User = async (req, res) => {
    const data = req.body;
    const user = model('user', userSchema);

    try{
        await user.create(data, () => {
            console.log('usuario criado!');
            res.send(data);
        });
    }catch(error){
        res.send('error');
    }
    
}

export default User;