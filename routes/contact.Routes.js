

const express = require('express')
const { ContactModel } = require('../model/contact')
const cors = require('cors')
const contactRouter = express.Router()
contactRouter.use(cors());


// Add Contact

contactRouter.post("/add", async (req, res) => {
    const { name, email, phone, label } = req.body
    try {
        const contact = new ContactModel({ name, email, phone, label })
        await contact.save()
        res.status(200).send({ "msg": "A new contact added" })
    } catch (err) {
        console.log("Error:", err)
    }
})


// Get Contact


contactRouter.get('/', async (req, res) => {
    try {
        const contacts = await ContactModel.find()
        res.status(200).send(contacts)
    } catch (err) {
        res.send({ "Error": err })
    }
})


// Patch

contactRouter.patch("/update/:id", async (req, res) => {
    const payload = req.body
    const id = req.params.id
    console.log(id)
    console.log(req.body)
    try {
        await ContactModel.findByIdAndUpdate(id, payload)
        res.status(200).send({ "msg": "Contact updated" })
    } catch (err) {
        res.status(400).send({ "msg": "Contact not found" })
    }
})


// Delete Contact

contactRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const contact = await ContactModel.findOne({ _id: id })
        await ContactModel.findByIdAndDelete(id)
        res.status(200).send({ "msg": "Contact has been successfully deleted" })
    } catch (err) {
        res.status(400).send({ "msg": "Contact not found" })
    }
})







module.exports = { contactRouter }