const mongoose = require('mongoose');
const config = require('../config');
const LoggerInstance = require('./logger');

module.exports = async () => {
  try {
    const { connection } = await mongoose.connect(config.databaseURL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    LoggerInstance.info(`✌️MongoDB connected to ${config.databaseURL}✌ ️`);
    return connection.db;
  } catch (error) {
    LoggerInstance.error('🔥 Error starting MongoDB', error);
    throw error;
  }
};
