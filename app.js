const express = require("express");
const collectionsRouter = require("./controller/collections")
const tagRouter = require("./controller/tag")
const imgRouter = require("./controller/img")
require("./db")
const app = express();
app.listen(5000, () => {
    console.log("Server Started")
});

app.use(express.json())
app.use(collectionsRouter)
app.use(tagRouter)
app.use(imgRouter)