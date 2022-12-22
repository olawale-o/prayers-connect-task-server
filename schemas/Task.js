module.exports = {
  type: 'object',
  required: ['title', 'description'],
  properties: {
    title: {
      type: 'string',
      description: 'The task title',
    },
    description: {
      type: 'string',
      description: 'The task description',
    },
    status: {
      type: 'string',
      description: 'The status of the task',
    },
  },
  example: {
    title: 'Task One',
    description: 'Task one details',
    status: 'todo',
  },
};
