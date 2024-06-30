import express from 'express'
import blogApi_route from './routes/routes.js';
import { dbConnection } from './config/db.js';
import mongoose from 'mongoose';


//create express server
const blogApp = express();
blogApp.use(express.json())

//import and call db connection fnc
dbConnection()
blogApp.use(blogApi_route);

blogApp.get('/', (req, res) => {
  res.get('Server started')
})


//listening to server
blogApp.listen(8000, () => {
  console.log('App is listening to port 8000')
})


