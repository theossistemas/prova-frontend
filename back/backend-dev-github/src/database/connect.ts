import { connect } from 'mongoose'

import { DATABASE } from './../../env';


export const connectDatabase = () => {

    connect(DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }, (err: any) => {
        if (err) return console.log(err.message);
        return console.log('Conectado ao Mongo');
    });

}