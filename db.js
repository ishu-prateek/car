const mongoose=require ("mongoose");
function connectDB()
{
    mongoose.connect('mongodb+srv://ishu_prateek:ishuprateek@cluster0.x0vyqkb.mongodb.net/car_udhari', {useUnifiedTopology: true, useNewUrlParser : true})
    const connection = mongoose.connection
    connection.on('connected',()=> {
        console.log(" Mongo DB connection sucessfull")
    })
    connection.on('error',()=> {
        console.log(" Mongo DB connection Error")
    })

}

connectDB()

module.exports=mongoose