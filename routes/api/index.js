const router = require('express').Router();
const UserRoutes = require('./user-routes');


router.use('/users', UserRoutes);

module.exports = router;