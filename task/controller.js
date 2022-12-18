const { ObjectID } = require('bson');
const config = require('.././config');

module.exports = function(client) {
  const Task = client.db('taskdb').collection(config.get('db.name'));
  return {
    index: async (req, res, _next) => {
      try {
        const filter = req.query;
        const tasks = await Task.find(filter)
                           .project({
                            id: "$_id",
                             title: 1,
                             status: 1,
                             description: 1,
                             createdAt: 1,
                             updatedAt: 1,
                             _id: 0,
                            }).toArray();
        return res.status(200).json({
           tasks
        })
      } catch (error) {
        console.log(err);
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
        const taskId = await Task.insertOne(newTask);
        return res.status(200).json({
          message: 'New todo successfully created',
          task: {
            id: taskId.insertedId,
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
