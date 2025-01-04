import mongoose from "mongoose";

    const database = async() =>{

        try {
            await mongoose.connect(process.env.DATABASE,{
              dbName:"mern",
              });
            console.log('Connect to Database');
          } 
          catch (error) {
            console.error('Error connecting to MongoDB:', error.message);
          }

    }

    export default database
