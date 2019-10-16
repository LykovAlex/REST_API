const Task = require('../models/task.model');


exports.get = (req, res) => {
  Task.find({})
    .then(task => {
      res.send(task)
    })
    .catch(error => {
      return error
    })
};
exports.create = function (req, res) {
  let data = req.body || {};
  Task.create(data)
    .then(task => {
      res.send(task)
    })
    .catch(error => {
      return error
    })
};
exports.update_status = (req, res) => {
  const status = !req.body.status
  Task.findByIdAndUpdate(req.params.id, { isChecked: status })
    .then(task => {
      res.send('Task udpated')
    })
    .catch(error => {
      return error
    })
};
exports.update_text = (req, res) => {
  Task.findByIdAndUpdate(req.params.id, { text: req.body.text })
    .then(task => {
      res.send('Task udpated')
    })
    .catch(error => {
      return error
    })
};
exports.update_statuses = (req, res) => {
  const status = req.body.status
  Task.updateMany({}, { isChecked: status })
    .then(task => {
      res.send('All tasks completed')
    })
    .catch(error => {
      return error
    })
}
exports.delete = (req, res) => {
  Task.findByIdAndRemove(req.params.id)
    .then(task => {
      res.send(task.id)
    })
    .catch(error => {
      return error
    })
};
exports.delete_complete = (req, res) => {
  Task.deleteMany({ isChecked: true })
    .then(task => {
      res.send('All completed tasks deleted')
    })
    .catch(error => {
      return error
    })
};

// exports.update = (req, res) => {
//   Task.findByIdAndUpdate(req.params.id, { $set: req.body })
//     .then(task => {
//       res.send('Task udpated')
//     })
//     .catch(error => {
//       return error
//     })
// };