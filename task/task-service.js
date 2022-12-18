const taskRepository = require('./task-repository');

module.exports = {
  getAllTasks: async (query) => {
    return await taskRepository.findTasks(query);
  },
  insertTask: async(data) => {
    return taskRepository.insertTask(data);
  },
  updateTask: async(data) => {
    return taskRepository.updateTask(data);
  }
}