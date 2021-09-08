const mongoose = require("mongoose");
const tag = mongoose.model("tag", mongoose.Schema({
    name: String
}))
module.exports = tag