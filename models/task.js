import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    title : String , 
    description : String , 
    status : Boolean,

});
const Task = mongoose.models.Task || mongoose.model("Task" , taskSchema);
 export default Task;