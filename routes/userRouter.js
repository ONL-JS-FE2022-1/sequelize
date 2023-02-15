const {Router} = require('express');
const UserController = require('../controllers/User.controller');
const {getUserInstance, validateUser} = require('../middlewares/user.mv');
const pagination = require('../middlewares/pagination.mv');

const userRouter = Router();

userRouter.post('/', validateUser, UserController.createUser);
userRouter.get('/', pagination, UserController.findAll);
userRouter.get('/:userId', getUserInstance, UserController.findOnePK);
userRouter.get('/groups/:userId', UserController.getUserWithGroups);
userRouter.delete('/:userId', UserController.deleteByPK);
userRouter.put('/:userId', getUserInstance, UserController.updateUser);

module.exports = userRouter;