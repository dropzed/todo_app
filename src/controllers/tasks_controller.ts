import {Task} from '../models/Task'
import asyncWrapper from '../middleware/async'
import {createCustomError} from '../errors/custom-error'
import {Request, Response, NextFunction} from 'express'

const getAllTasks = asyncWrapper(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        next(error); // Передача ошибки в обработчика ошибок Express
    }
});

const createTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (e) {
        next(e)
    }
})

const getTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }

        res.status(200).json({task})
    } catch (e) {
        next(e)
    }


})
const deleteTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})
        if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({task})
    } catch (e) {
        next(e)
    }


})
const updateTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {id: taskID} = req.params

        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true,
            runValidators: true,
        })

        if (!task) {
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }

        res.status(200).json({task})
    } catch (e) {
        next(e)
    }
})

export {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}
