const mongoose = require("mongoose");

const Collection = mongoose.model("collection",new mongoose.Schema({
    name : String,
    detail : String,
    imgs : [{type: mongoose.Types.ObjectId,ref:"image"}]
}));

module.exports = Collection
