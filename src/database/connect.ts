import mongoose from 'mongoose';
import 'dotenv-safe/config'

const DB = process.env['DB']
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}


if(!DB){
    console.log('URL do banco de dados não definida!');
    process.exit(1);
}

const connect = (): void => {
    mongoose.connect(DB, options);

    mongoose.connection.on('connected', () => {
        console.log('Banco de dados conectado!');
    })

    mongoose.connection.on('error', () => {
        console.log("Erro na conexão com o banco de dados!");
    })

    mongoose.connection.on('disconnected', () => {
        console.log("Banco de dados desconectado!");
    });
};

export default connect;