import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    files: [{
        name: {
            type: String,
        },
        sourceCode: {
            type: String,
        },
    }],
    lab: {
        type: String,
    },
    languageId: {
        type: Number
    }
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema)