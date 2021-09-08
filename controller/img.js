const img = require("../models/img")
const express = require("express")
const { updateOne, deleteOne, deleteMany } = require("../models/img")

const router = express.Router()


// find all
router.get("/img", async (req, res) => {
    const data = await img.find()
    res.json(data)
})
// find one
router.get("/img/:id", async (req, res) => {
    const data = await img.findOne({ _id: req.params.id })
    res.json(data)
})
// post
router.post("/img", async (req, res) => {
    await img.create(req.body)
    res.send("Post img Success")
})
// edit
router.patch("/img/:id", async (req, res) => {
    await img.updateOne({ _id: req.params.id }, { $set: req.body })
    res.send("Edit img Success")
})
// delete One 
router.delete("/img/:id", async (req, res) => {
    await img.deleteOne({ _id: req.params.id })
    res.send("Delete tag Success")
})
// delete all
router.delete("/img", async (req, res) => {
    await img.deleteMany({}, res)
    res.send("Delete all Success")
})


module.exports = router

