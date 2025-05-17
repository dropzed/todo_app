import mongoose, {Schema, Model} from 'mongoose';

interface ITask extends Document {
  name: string;
  completed: boolean;
}


const TaskSchema: Schema<ITask> = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

export const Task: Model<ITask> =  mongoose.model<ITask>('Task', TaskSchema);
export { ITask, TaskSchema };