const mongoose = require('mongoose');
const { Schema } = mongoose;

const SampleModel = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    }
)

const Sample = mongoose.model("smple", SampleModel);
module.exports = Sample;