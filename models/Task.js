import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must be a name'],
        trim: true,
        maxLength: [20, 'name can not be more than 20 chars']
    },
    completed: {
        type: Boolean,
        default: false
    },
})

export default mongoose.model('Task', TaskSchema);