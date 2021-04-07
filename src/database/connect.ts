import mongo from 'mongoose';

export default mongo.connect('mongodb://127.0.0.1:27017/', {useNewUrlParser: true, useUnifiedTopology: true});

const conect = mongo.connection;

conect.on('open', () => {
    console.log("you're conected");
});


    