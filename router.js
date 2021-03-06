const express = require('express');
const path = require('path');
const router = express.Router();
let Task = require('./taskModel');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

router.get('/api/getTasks', (req, res) => {
    Task.find({}, (err, task) => {
        if(err) console.log(err);
        else
        res.send({tasks: task});    
    })
});

router.post('/api/addTask', (req, res) => {
    let task = req.body;
    task.isNewTask = false;
    console.log(task);
    // console.log(req.body);
    
    Task.create(task, (err) => {
        if(err) console.log(err);
        else res.send('success');
    })
})

router.put('/api/updateTask', (req, res) => {
    let task = req.body;
    Task.findByIdAndUpdate(task._id, task, (err, blog) => {
        if(err) console.log(err);
        else res.send(blog);
    })
})

router.delete('/api/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id, (err) => {
        if(err) console.log(err);
        else
        res.send('success');
    })
})


module.exports = router;
