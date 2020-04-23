const express = require('express');
const mongooseLoader = require('./loader/mongoose');
const Logger = require('./loader/logger');

const config = require('./config');
const userRoute = require('./api/routes/user');

const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const startServer = async () => {

    // INITIALIZE EXPRESS
    const app = express();
    Logger.info('Express App Intialized ✌️✌️');

    // MIDDLE WARES
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.json({limit: '50mb'}));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());

    // ROUTES
    app.use(config.api.prefix, userRoute);

    // INITIALIZE MONGOOSE TO CONNECT TO DB
    await mongooseLoader();
    Logger.info('✌️ Mongoose loaded✌ ️');
    
    // DEFINED PORT
    const PORT  =  process.env.PORT || 5000;

    // RUN SERVER
    app.listen(PORT, ((err) => {
      if (err) throw new Error(err);
      console.log(`Server started on port ${PORT}`);
    }));
  };
  
  startServer();