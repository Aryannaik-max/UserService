const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models/index')
const cors = require('cors')

const app = express();

const { PORT, DB_SYNC } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');


const startServer = () => {
  app.use(cors({
    origin: '*', 
    credentials: true
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/api', ApiRoutes);


  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
     if(DB_SYNC){
        db.sequelize.sync({alter:true});
    }
  });
}

startServer();