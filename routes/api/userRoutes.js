const router = require('express').Router();

const {
    createUser,
    getAllUsers,
    getUserByID,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router
    .route('/:id')
    .get(getUserByID)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;