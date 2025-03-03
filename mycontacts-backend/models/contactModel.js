const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is a required field"]
    },
    email: {
        type: String,
        required: [true, "email is a required field"]
    },
    phone: {
        type: String,
        required: [true, "phone number is a required field"]
    },
},
{
    timestamps: true
})

module.exports = mongoose.model("contact", contactSchema)