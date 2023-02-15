/* eslint-disable import/no-useless-path-segments */
// eslint-disable-next-line import/no-extraneous-dependencies
const { ObjectID } = require('bson');
const config = require('.././config');
const dbClient = require('../database')(config.get('db.host'));

const Task = dbClient.db(config.get('db.name')).collection('tasks');

module.exports = {
  findTasks: async (query) => Task.find(query)
    .project({
      id: '$_id',
      title: 1,
      status: 1,
      description: 1,
      createdAt: 1,
      updatedAt: 1,
      _id: 0,
    }).toArray(),
  insertTask: async (data) => Task.insertOne(data),
  updateTask: async (data) => {
    const {
      id, status, title, description,
    } = data;
    return Task.findOneAndUpdate(
      { _id: ObjectID(id) },
      {
        $set: {
          status, title, description, updatedAt: new Date(),
        },
      },
      { returnDocument: 'after' },
    );
  },
  findOne: async (query) => Task.findOne({ _id: ObjectID(query) }),
};
