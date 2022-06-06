const mongoose = require('mongoose')
const Schema = mongoose.Schema

let studentSchema = new Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  {
    collection: 'students',
  },
)

module.exports = mongoose.model('Student', studentSchema)
