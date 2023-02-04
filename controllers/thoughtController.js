const { Thought, User } = require('../models')

const thoughtController = {

    createThought({ req, body }, res) {
        Thought.create(body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            })

    },

    getAllThoughts(req, res) {
        Thought.find({})
            .populate({
                path: 'username',
                select: '-__v'
            })
            .select('-__v')
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err)
            })
    },
    getThoughtByID({ params }, res) {
        Thought.findOne({ _id: params.id })
            .populate({
                path: 'username',
                select: '-__v'
            })
            .select('-__v')
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err)
            })
    },
    updateThought({ params, body }, res) {
        Thought.updateOne({ _id: params.id }, body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            })


    },
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.id })
            .then(thoughts => {
                if (!thoughts) {
                    res.status(404).json({ message: 'No thoughts with this particular ID!' });
                    return;
                }
                res.json(thoughts);
            })
            .catch(err => res.status(400).json(err));
    },

};

module.exports = thoughtController;




