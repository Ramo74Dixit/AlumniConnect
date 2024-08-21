const mongoose =require('mongoose')
const userSchema=new mongoose.Schema({
    JobRole: { type: String, required: true },
    Company: { type: String, required: true },
    Salary: { type: String, required: true },
    Location: { type: String, required: true },
    JobType: { type: String, required: true },
    Experience: { type: String, required: true },
});

module.exports=mongoose.model("users",userSchema);