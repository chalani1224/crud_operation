const SampleModel = require('../models/sample');

//create sample
const createSample = async (req, res) => {
    console.log("req body::> ", req.body)
    const {
        fName,
        lName,
        age
    } = req.body

    try {
        const smaple = new SampleModel({
            firstName: fName,
            lastName: lName,
            age
        })

        return await smaple.save().then((value) => {
            res.status(200).json({ ID: value._id, message: "Success" });
        }).catch((err) => {
            res.status(500).json({ err });
        })

    } catch (err) {
        return res.status(400).json({ err: err.message });
    }
}

module.exports = {
    createSample
}