const AppError = require('../common/app-error');
const httpStatus = require('../common/http-status');
const taskService = require('./task-service');

module.exports = function() {
  return {
    index: async (req, res, _next) => {
      try {
        const filter = req.query;
        const tasks = await taskService.getAllTasks(filter);
        return res.status(200).json({tasks})
      } catch (error) {
        return new AppError(
          httpStatus.INTERNAL_SERVER_ERROR.code,
          e.message
        );
      }
    },
    create: async (req, res, _next) => {
      try {
        const { task: { title, description, status } } =  req.body;
        const newTask = {
          title: title.toLowerCase(),
          description: description.toLowerCase(),
          status: status.toLowerCase(),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        const taskId = await taskService.insertTask(newTask);
        return res.status(200).json({
          message: 'New todo successfully created',
          task: {
            id: taskId.insertedId,
            ...newTask
          }
        });
      } catch (e) {
        return new AppError(
          httpStatus.INTERNAL_SERVER_ERROR.code,
          e.message
        );
      }
    },
    update: async (req, res, _next) => {
      try {
        const { task } = req.body;
        const taskToUpdate = await taskService.updateTask(task);
        return res.status(200).json({
          message: 'Task updated successfully',
          task: {
            id,
            ...taskToUpdate.value
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
  }
};
