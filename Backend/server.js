require ('dotenv').config();


const app = require('./src/App');
const db= require('./src/db/db');


db();

app.listen(3000,()=>{
    console.log("Port is Running ");
    
})