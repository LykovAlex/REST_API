const express = require('express');
const router = express.Router();

const task_controller = require('../controllers/task.controller');

router.get('', task_controller.get);
router.post('', task_controller.create);
router.put('/:id/status', task_controller.update_status);
router.put('/:id/text', task_controller.update_text);
router.put('', task_controller.update_statuses);
router.delete('/:id', task_controller.delete);
router.delete('', task_controller.delete_complete);

module.exports = router;
