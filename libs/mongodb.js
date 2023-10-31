const { default: mongoose } = require("mongoose");
const connectionSRT = process.env.NEXT_MONGO_URI;
const connectMongoDB = () =>{
     
    try{
        mongoose.connect(connectionSRT);
        console.log("YUP , Got connected")
    }catch(err){
        console.log("OOps got an error");
        console.log(err);
    }
 
};
export default connectMongoDB;