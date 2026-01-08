const Task = require('../models/Task');

class TaskRepository {
    async create(taskData) {
        const task = await Task.create({
            ...taskData,
            user: taskData.user
        });
        return await task.save();
    }
    async findById(id) {
        return await Task.findById(id);
    }
    async findAll(id) {
        return await Task.find({ user: id }).sort({ createdAt: -1 });
    }
    
    async update(id, taskData) {
        return await Task.findByIdAndUpdate(
            id,
            taskData,
            { new: true, runValidators: true }
        );
    }
    async delete(id) {
        return await Task.findByIdAndDelete(id);
    }
}

module.exports = new TaskRepository();