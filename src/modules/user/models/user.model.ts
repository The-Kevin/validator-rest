import {Schema, model} from 'mongoose';


const user = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    pass: {
        type: String,
        required: true,
        select: false
    },
    date: {type: Date, default: Date.now}
});

export default model('User', user);