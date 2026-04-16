// Scheduled tasks and automation workflows
const schedule = require('node-schedule');

function scheduleTask(task, time) {
    schedule.scheduleJob(time, function(){
        task();
    });
}

module.exports = { scheduleTask };