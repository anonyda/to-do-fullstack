const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({path: "./config.env"});

switch(process.env.DATA_SOURCE.toLowerCase()){
    case 'database':
        mongoose.connect(process.env.DB_LOCAL, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex: true,
            useFindAndModify: false
            })
            .then((connection) => {
                console.log('Connected to DB');
                app.listen(process.env.PORT, () => {
                    console.log(`App is listening to requests at port ${process.env.PORT}`);
                })
                
            })
            .catch((error) => {
                console.log('Error in DB Connection');
        });
        break;

    case 'file':
        app.listen(process.env.PORT, () => {
            console.log(`App is listening to requests at port ${process.env.PORT}`);
        })
        break;


}

