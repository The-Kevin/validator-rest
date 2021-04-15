import {Schema, model} from 'mongoose';


const User = new Schema({
    name: {
        type: String,
        required: true
    },
    nick: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    company: {
        type: String
    },
    softSkills: [String],
    hardSkills: [String],
    pass: {
        type: String,
        required: true,
        select: false
    },
    date: {type: Date, default: Date.now}
});

User.methods.serialize = function(){
    
}

export default model('User', User);