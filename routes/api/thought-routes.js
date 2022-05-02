const router = require('express').Router();

const {getAllthoughts, createThoughts, getThoughtsById, updateThought, deleteThought, Createreactions, deletereactions} = require('../../controllers/thoughts');


router
.route('/')
.get(getAllthoughts)
.post(createThoughts);

// /api/pizzas/:id
router
  .route('/:id')
  .get(getThoughtsById)
  .put(updateThought)
  .delete(deleteThought);

  router
  .route('/:thoughtId/reactions')
  .post(Createreactions)


  router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deletereactions);


module.exports = router;