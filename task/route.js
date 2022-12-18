const config = require('.././config');
const router = require('express').Router();

const dbClient = require('../database')(config.get('db.host'));
const controller = require('./controller')(dbClient);

/**
* @swagger
*   /task:
*     get:
*       summary: Get all tasks
*       tags: [Task]
*       responses:
*         200:
*           description: Task created successfully
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/TaskResponse'
*         500:
*           description: Internal server error
*/
router.get('/', controller.index);
/**
* @swagger
*   /task:
*     post:
*       summary: Create a new task
*       tags: [Task]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Task'
*       responses:
*         200:
*           description: Task created successfully
*           content:
*             application/json:
*               schema:
*                 type: array
*                 items:
*                   $ref: '#/components/schemas/TaskResponse'
*         500:
*           description: Internal server error
*/

router.post('/', controller.create);
/**
* @swagger
*   /task:
*     put:
*       summary: Update a task
*       tags: [Task]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Task'
*       responses:
*         200:
*           description: Task created successfully
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/TaskResponse'
*         500:
*           description: Internal server error
*/
router.put('/', controller.update);

module.exports = router;
