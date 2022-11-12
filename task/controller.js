const { ObjectID } = require('bson');

module.exports = function(client) {
  const Task = client.db('taskdb').collection('tasks');
  return {
    index: async (req, res, _next) => {
      try {
        const filter = {}
        const tasks = await Task.find(filter).toArray();
        return res.status(200).json({
           tasks
        })
      } catch (error) {
        console.log(err);
      }
    },
    create: async (req, res, _next) => {
      try {
        const { task: { title, description } } =  req.body;
        const newTask = {
          title: title.toLowerCase(),
          description: description.toLowerCase(),
          status: {
            todo: true,
            inProgress: false,
            done: false,
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        const taskId = await Task.insertOne(newTask);
        return res.status(200).json({
          message: 'New todo successfully created',
          todo: {
            task_id: taskId.insertedId,
            ...newTask
          }
        });
      } catch (e) {
        console.log(e);
      }
    },
    update: async (req, res, _next) => {
      try {
        const { task: { id, status } } = req.body;
        const taskToUpdate = await Task.findOneAndUpdate(
          { _id: ObjectID(id) },
          { $set: { status } },
          { returnDocument: 'after' },
        );
        return res.status(200).json({
          message: 'Task updated successfully',
          todo: taskToUpdate.value,
        });
      } catch (e) {
        console.log(e);
      }
    },
  }
};
