const tag = require("../models/tag")
const express = require("express")

const router = express.Router()

// find all
router.get("/tag", async (req, res) => {
    const data = await tag.find()
    res.json(data)
})

// find one
router.get("/tag/:id", async (req, res) => {
    const data = await tag.findOne({ _id: req.params.id })
    res.json(data)
})

// post
router.post("/tag", async (req, res) => {
    await tag.create(req.body)
    res.send("Post tag Success")
})

// edit
router.patch("/tag/:id", async (req, res) => {
    await tag.updateOne({ _id: req.params.id }, { $set: req.body })
    res.send("Edit tag Success")
})

// delete One 
router.delete("/tag/:id", async (req, res) => {
    await tag.deleteOne({ _id: req.params.id })
    res.send("Delete tag Success")
})

// delete all
router.delete("/tag", async (req, res) => {
    await tag.deleteMany({}, res)
    res.send("Delete all Success")
})

module.exports = router

