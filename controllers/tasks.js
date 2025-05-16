import Task from '../models/Task.js';


const getAllTasks = async (req, res) => {

    res.send('All tasks');
}

const getOneTask = (req, res) => {
    res.json({id: req.params.id});
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.json({task});
    } catch (e) {
        console.error(e);
        res.status(500).json({message: e.message});
    }

}

const updateTask = (req, res) => {
    res.send('Update task');
}

const deleteTask = (req, res) => {
    res.send('Delete task');
}


export {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    getOneTask,
};