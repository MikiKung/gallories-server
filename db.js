const mongoose = require("mongoose");

// console.log(process.env.NODE_ENV,process.env.NODE_ENV === "docker")
let hostMongo = "localhost"
if(process.env.NODE_ENV === "docker"){
    hostMongo = "mongo"
}

const uri = `mongodb://${hostMongo}:27017/galleries`
mongoose.connect(uri, {}, (err) => {
    if (err) {
        throw new Error(err.message)
    }
    console.log("database OK ^_^")
})