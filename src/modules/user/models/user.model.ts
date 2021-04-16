import {Schema, model, Document, Types} from 'mongoose';

interface User{
    name: string,
    nick: string
    phone: string
    email: string
    company: string
    softSkills: Array<string>,
    hardSkills: Array<string>,
    date: Date
}

interface Serialize extends User, Document{
    softSkills: Types.Array<string>,
    hardSkills: Types.Array<string>
}

const userSchema = new Schema<Serialize>({
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
    softSkills: [{type: String}],
    hardSkills: [{type: String}],
    pass: {
        type: String,
        required: true,
        select: false
    },
    date: {type: Date, default: Date.now}
});

userSchema.methods.serialize = function(this: Serialize){
    return {
        name: this.name,
        nick: this.nick,
        phone: this.phone,
        email: this.email,
        company: this.company,
        softSkills: this.softSkills,
        hardSkills: this.hardSkills,
        date: this.date
    }
}

export default model<Serialize>('User', userSchema);