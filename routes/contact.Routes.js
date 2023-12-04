

const express = require('express')
const { ContactModel } = require('../model/contact')
const cors = require('cors')
const contactRouter = express.Router()
contactRouter.use(cors());


// Add Contact

contactRouter.post("/add", async (req, res) => {
    const { name, email, phone, label } = req.body
    try {
            const contact = new ContactModel({ name, email, phone,label})
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


module.exports = { contactRouter }