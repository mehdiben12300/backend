const Member = require('../models/Member');
exports.getMembers = async (req, res) => {
    try {

        const members = await Member.find()
        return res.status(200).json(members)
    } catch (error) {
        return res.status(500).json({ message: "Server Error" })
    }
}