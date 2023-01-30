const router = require('express').Router();
const taskValidationSchema = require('./validation/task-schema');
const validateTaskBody = require('./validation/validate-new-task');
const controller = require('./controller')();

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
*               $ref: '#/components/schemas/NewTaskRequest'
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

router.post('/', validateTaskBody(taskValidationSchema), controller.create);
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
*               $ref: '#/components/schemas/TaskUpdateRequest'
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
