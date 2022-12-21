const mongoose = require('mongoose');

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
        console.log(conn.connection.host,"connection successful");

    } catch (error) {
        console.log('Datbase connection failed');
        process.exit()
    }
}
module.exports=connectDB