const expressLoader = require('./express');
const Logger = require('./logger');

module.exports = async (app) => {
    // await mongooseLoader();
    // Logger.info('✌️ Mongoose loaded✌ ️');
    await expressLoader(app);
    Logger.info('Express App Intialized ✌️✌️');
};