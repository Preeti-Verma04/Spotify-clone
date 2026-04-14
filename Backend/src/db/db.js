const mongoose= require('mongoose');



async function connectDb(){

    try{
            await mongoose.connect(process.env.MONGO_URI);
             console.log("connect to db")
    }
    catch(error){
        console.error("Database connection error", error)
    }


}

module.exports= connectDb