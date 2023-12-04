

const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    label: { type: String, required: true },
}, { versionKey: false })

const ContactModel = mongoose.model('contact', contactSchema)

module.exports = { ContactModel }