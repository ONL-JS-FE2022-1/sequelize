const {Router} = require('express');
const UserController = require('../controllers/User.controller');
const TaskController = require('../controllers/Task.controller');
const {getUserInstance, validateUser} = require('../middlewares/user.mv');

const router = Router();

router.post('/user', validateUser, UserController.createUser);
router.get('/users', UserController.findAll);
router.get('/user/:userId', getUserInstance, UserController.findOnePK);
router.delete('/user/:userId', UserController.deleteByPK);
router.put('/user/:userId', getUserInstance, UserController.updateUser);


router.post('/task/:userId', getUserInstance, TaskController.createTask);
router.get('/task/:userId', getUserInstance, TaskController.getAllUserTasks);
router.get('/task-count/:userId', getUserInstance, TaskController.getCountOfTasks);


module.exports = router;