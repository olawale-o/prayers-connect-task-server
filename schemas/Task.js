module.exports = {
    type: 'object',
    required: ['title', 'description'],
    properties: {
      title: {
        type: 'string',
        description: 'The street address',
      },
      description: {
        type: 'string',
        description: 'The state',
      },
    },
    example: {
      title: 'Task One',
      description: 'Task one details',
    },
  };
  