const {
  Task,
  TaskResponse,
} = require('./schemas');

module.exports = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for PRAYERS CONNECT task',
    version: '1.0.0',
    contact: {
      name: 'API Support',
      url: 'localhost:5000/api/v1/task',
      email: 'omoogunolawale@gmail.com',
    },
  },
  components: {
    schemas: { Task, TaskResponse },
  },
};
