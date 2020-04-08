const express = require('express');
const loaders = require('./loader')

const startServer = async () => {
    const app = express();
    const PORT  =  process.env.PORT || 5000;
  
    await loaders(app);
  
    app.listen(PORT, ((err) => {
      if (err) throw new Error(err);
      console.log(`Server started on port ${PORT}`);
    }));
  };
  
  startServer();