const collections = require("../models/collections")
const express = require("express")

const router = express.Router()

// find all
router.get("/collections", async (req, res) => {
    const data = await collections.find()
    res.json(data)
})
// find one
router.get("/collections/:id", async (req, res) => {
    const data = await collections.findOne({ _id: req.params.id })
    res.json(data)
})
// post
router.post("/collections", async (req, res) => {
    await collections.create(req.body)
    res.send("Post collections Success")
})
// edit
router.patch("/collections/:id", async (req, res) => {
    await collections.updateOne({ _id: req.params.id }, { $set: req.body })
    res.send("Edit collections Success")
})
// delete One 
router.delete("/collections/:id", async (req, res) => {
    await collections.deleteOne({ _id: req.params.id })
    res.send("Delete tag Success")
})
// delete all
router.delete("/collections", async (req, res) => {
    await collections.deleteMany({}, res)
    res.send("Delete all Success")
})
module.exports = router

