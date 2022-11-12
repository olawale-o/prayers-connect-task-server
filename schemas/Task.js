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
        type: 'object',
        description: "The status of the task",
        properties: {
          todo: {
            type: 'boolean',
            description: 'The inital task status',
          },
          inProgress: {
            type: 'boolean',
            description: 'The progress status of task',
          },
          done: {
            type: 'boolean',
            description: 'The completed state of task',
          },
        }
      }
    },
    example: {
      title: 'Task One',
      description: 'Task one details',
    },
  };
  