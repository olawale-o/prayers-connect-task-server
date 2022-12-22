const taskRepository = require('./task-repository');

module.exports = {
  getAllTasks: async (query) => taskRepository.findTasks(query),
  insertTask: async (data) => taskRepository.insertTask(data),
  updateTask: async (data) => taskRepository.updateTask(data),
};
