const router = require('express').Router();

const{getAllUsers, createUsers, getUsersById, updateUser, deleteUser, Createnewfriend, deletenewfriend} = require('../../controllers/users');


router
.route('/')
.get(getAllUsers)
.post(createUsers);

// /api/Users/:id
router
  .route('/:id')
  .get(getUsersById)
  .put(updateUser)
  .delete(deleteUser);

  router
  .route('/:userId/friends/:friendId')
  .post(Createnewfriend)
  .delete(deletenewfriend);


module.exports = router;