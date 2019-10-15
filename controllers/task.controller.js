const Task = require('../models/task.model');

exports.task_create = function (req, res) {
  let data = req.body || {};
  Task.create(data)
    .then(task => {
      res.send(task)
    })
    .catch( error => {
      return error
    })
    // let task = new Task({
    //   text: req.body.text,
    //   isChecked: req.body.isChecked
    // });
    // task.save(function (err) {
    //     if (err) return next(err);
    //     res.send('Task Created successfully')
    // })
};

// exports.task_details = function (req, res) {
//     Task.findById(req.params.id, function (err, product) {
//         if (err) return next(err);
//         res.send(product);
//     })
// };

exports.task_get = (req, res) => {
  Task.find({})
    .then(task => {
      res.send(task)
    })
    .catch( error => {
      return error
    })
}

exports.tasks_update_true = (req, res) => {
  Task.updateMany({},{ isChecked: true})
    .then(task => {
      res.send('All tasks completed')
    })
    .catch( error => {
      return error
    })
}

exports.tasks_update_false = (req, res) => {
  Task.updateMany({ isChecked: false})
    .then(task => {
      res.send('All tasks uncompleted')
    })
    .catch( error => {
      return error
    })
}

exports.task_update = (req, res) => {
    Task.findByIdAndUpdate(req.params.id, {$set: req.body})
      .then(task => {
        res.send('Task udpated')
      })
      .catch( error => {
        return error
      })
};

exports.task_delete = (req, res) => {
    Task.findByIdAndRemove(req.params.id)
      .then(task => {
        res.send(task.id)
      })
      .catch( error => {
        return error
      })
};

exports.tasks_delete_complete = (req, res) => {
  Task.deleteMany({isChecked: true})
    .then(task => {
      res.send('All completed tasks deleted')
    })
    .catch( error => {
      return error
    })
};
