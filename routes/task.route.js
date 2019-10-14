const express = require('express');
const router = express.Router();

const task_controller = require('../controllers/task.controller');

router.get('/', task_controller.task_get);
router.get('/:id', task_controller.task_details);
router.post('/create', task_controller.task_create);
router.put('/:id/update', task_controller.task_update);
router.delete('/:id/delete', task_controller.task_delete);


module.exports = router;
