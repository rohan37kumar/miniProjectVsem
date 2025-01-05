const config = {
    development: {
        mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/pet-adoption',
        port: process.env.PORT || 5000
    },
    production: {
        mongoUri: process.env.MONGODB_URI,
        port: process.env.PORT || 5000
    }
};

module.exports = config[process.env.NODE_ENV || 'development']; 