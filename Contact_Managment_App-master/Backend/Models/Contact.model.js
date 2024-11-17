// const mongoose = require("mongoose")
// const ContactSchema = mongoose.Schema({
//     firstName:{
//         type:String,
//         required:true
//     },
//     lastName:{
//         type:String,
//         required:true
//     },
//     phoneNumber:{
//         type:String,
//         required:true,
//         unique:true
//     },
//     email:{
//         type:String,
//         required:true,
//         unique:true
//     },
//         code:{
//             type:String,
//             required:true 
//         },
//     createDate:{
//         type:Date,
//         default: Date.now,
//         get: function () {
//             // Format the date as "dd-mm-yyyy"
//             const date = new Date(this._doc.createDate);
//             const day = date.getDate().toString().padStart(2, '0');
//             const month = (date.getMonth() + 1).toString().padStart(2, '0');
//             const year = date.getFullYear().toString();
//             return `${day}-${month}-${year}`;
//         }
//     }
// })

// ContactSchema.index({ phoneNumber: 1 }, { unique: true });
// ContactSchema.index({ email: 1 }, { unique: true });
// const ContactModel = mongoose.model("contact",ContactSchema)

// module.exports=ContactModel

const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true 
    },
    company: { // New field for Company
        type: String,
        required: false // Optional field, you can set it to true if it's required
    },
    jobTitle: { // New field for Job Title
        type: String,
        required: false // Optional field, you can set it to true if it's required
    },
    createDate: {
        type: Date,
        default: Date.now,
        get: function () {
            // Format the date as "dd-mm-yyyy"
            const date = new Date(this._doc.createDate);
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear().toString();
            return `${day}-${month}-${year}`;
        }
    }
});

// Ensure unique indexes for phoneNumber and email
ContactSchema.index({ phoneNumber: 1 }, { unique: true });
ContactSchema.index({ email: 1 }, { unique: true });

const ContactModel = mongoose.model("contact", ContactSchema);

module.exports = ContactModel;
