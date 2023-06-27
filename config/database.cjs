const mongoose = require('mongoose');

const connect = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGO_LOGIN}:${process.env.MONGO_PASSWORD}@cluster0.tpw5b43.mongodb.net/`
    );

    console.log('connected to mongo');
};

module.exports = connect;
