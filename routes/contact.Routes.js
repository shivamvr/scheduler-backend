

const express = require('express')
const { ContactModel } = require('../model/contact')
const cors = require('cors')
const contactRouter = express.Router()
contactRouter.use(cors());


// Register

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



module.exports = { contactRouter }