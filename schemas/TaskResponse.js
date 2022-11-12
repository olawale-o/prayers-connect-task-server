module.exports = {
    type: 'object',
    required: ['task_id', 'title', 'description'],
    properties: {
      task_id: {
        type: 'string',
        description: 'The id of the task.',
      },
      title: {
        type: 'string',
        description: 'The description of the task.',
      },
      status: {
        type: 'object',
        description: 'The status object of the task.',
      },
    },
    example: {
      task_id: '12200200202',
      title: 'task one',
      description: 'Task one details',
      status: {
        todo: true,
        inProgress: false,
        done: false,
      },
    },
  };
  