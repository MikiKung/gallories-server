const mongoose = require("mongoose");
const image = mongoose.model("image", mongoose.Schema({
    name: String,
    detail: String,
    img: String,
    tags : [{type: mongoose.Types.ObjectId,ref:"tag"}] //ทำforeignKey โดยเชื่อมกับ refer
}));
module.exports = image