const NewTaskRequest = {
  type: 'object',
  required: ['title', 'description', 'status'],
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

const TaskUpdateRequest = {
  type: 'object',
  required: ['id', 'title', 'description'],
  properties: {
    id: {
      type: 'string',
      description: 'The task id',
    },
    title: {
      type: 'string',
      description: 'The task title',
    },
    description: {
      type: 'string',
      description: 'The task description',
    },
  },
  example: {
    title: 'Task One',
    description: 'Task one details',
    id: '1',
  },
};

module.exports = {
  NewTaskRequest,
  TaskUpdateRequest,
};
