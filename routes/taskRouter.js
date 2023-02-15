const {Router} = require('express');
const TaskController = require('../controllers/Task.controller');
const {validateTask} = require('../middlewares/task.mv');
const {getUserInstance} = require('../middlewares/user.mv');
const pagination = require('../middlewares/pagination.mv');

const taskRouter = Router();

taskRouter.post('/:userId', validateTask, getUserInstance, TaskController.createTask);
taskRouter.get('/:userId', pagination, getUserInstance, TaskController.getAllUserTasks);
taskRouter.get('/count/:userId', getUserInstance, TaskController.getCountOfTasks);

module.exports = taskRouter;