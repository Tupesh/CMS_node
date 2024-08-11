const mongoose= require("mongoose");

exports.connectdatabase =async()=>{ 
    //database connection
     mongoose.connect("mongodb+srv://tupeshghimire:hello@cluster0.q2y0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
        console.log("Database connection successful")
    })   
}