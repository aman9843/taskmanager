const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            minlength:1,
            trim:true
        },
        // name:{
        //    type:String,
        //    required:true,
        //    minlength:2,
        //    trime:true
        // },
        // description:{
        //     type:String,
        //     required:true
        // },
        _listId:{
            type:mongoose.Types.ObjectId,
            required:true
            
        }
    }
)



const Task = mongoose.model("Task",taskSchema)

module.exports = Task;
