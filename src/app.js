import 'dotenv/config'
import express from 'express';
import { connectDB } from './db/config.js';
import syncDB from './db/init.js';
import AllRoutes from './Routes/index.js';
const userApp = express();
const port = 3000;

userApp.use(express.json());
userApp.use(AllRoutes); //create tables in db
connectDB;
syncDB;
syncDB().then(()=> {
    console.log("DB ADDED")
});
//listen server
userApp.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})