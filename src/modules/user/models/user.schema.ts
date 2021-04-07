import {Schema} from 'mongoose';


const user:Schema = new Schema({
    name: {
        type: String,
        uppercase: true
    },
    pass: {
        type: String,
        select: false
    },
    date: {type: Date, default: Date.now}
});

export default user;