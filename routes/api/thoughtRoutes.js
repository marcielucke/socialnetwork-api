const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    getThoughtByID,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtController');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:id')
    .get(getThoughtByID)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;
