const { Thought, User } = require('../models')

const userController = {

    createUser({ body }, res) {
        User.create(body)
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            })

    },


    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'username',
                select: '-__v'
            })
            .select('-__v')
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err)
            })
    },
    getUserByID({ params }, res) {
        User.findOne({ _id: params.id })
            .populate({
                path: 'username',
                select: '-__v'
            })
            .select('-__v')
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err)
            })
    },
    updateUser({ params, body }, res) {
        User.updateOne({ _id: params.id }, body)
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            })


    },
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
            .then(user => {
                if (!user) {
                    res.status(404).json({ message: 'No User with this particular ID!' });
                    return;
                }
                res.json(user);
            })
            .catch(err => res.status(400).json(err));
    },

};

module.exports = userController;