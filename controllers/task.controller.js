const Task = require('../models/task.model');


exports.task_create = function (req, res) {
    let task = new Task(
        {
          text: req.body.text,
          isChecked: req.body.isChecked
        }
    );
    task.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Task Created successfully')
    })
};

exports.task_details = function (req, res) {
    Task.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.task_get = (req, res) => {
  Task.find({})
    .then(task => {
      res.send(task);
    });
}

exports.task_update = function (req, res) {
    Task.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
};

exports.task_delete = function (req, res) {
    Task.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
