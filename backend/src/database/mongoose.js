const mongoose = require('mongoose');

const localURL = 'mongodb://peterson:peterson@localhost:27017/devs';
const mongodbURI = process.env.MONGODB_URI || localURL;

// mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('returnOriginal', false)
mongoose.Promise = global.Promise;

module.exports = {
    connect: () => {
        mongoose.connect(mongodbURI);
    
        const db = mongoose.connection;
        
        db.once('open', () => console.log('MongoDB.: OK'));
        db.on('error', (arg) => {
            console.error('MongoDB.: FAIL');
            throw new Error('Failed to connect to MongoDB: \n' + arg.message);
        });

        return db;
    }
};