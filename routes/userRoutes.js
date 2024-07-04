const express = require('express');
const usercontroller = require('./../controller/usercontroller');


const router = express.Router();
router.route('/').get(usercontroller.getAllUser).post(usercontroller.createUser);
router
  .route('/:id')
  .get(usercontroller.getUser)
  .patch(usercontroller.updateUser)
  .delete(usercontroller.deleteUser);
module.exports = router;
