const { LOCAL_MONGODB_SINGLESET } = require('../config');
const router = require('express').Router();
// const { MongoClient } = require('mongodb');

const dbClient = require('../database')(LOCAL_MONGODB_SINGLESET);
const controller = require('./controller')(dbClient);

router.get('/', controller.index);
router.post('/', controller.create);
router.put('/', controller.update);

module.exports = router;
