import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    files: [{
        fileName: {
            type: String,
        },
        sourceCode: {
            type: String,
        },
        languageId: {
            type: Number
        }
    }],
    lab: {
        type: String,
    },
    languageId: {
        type: Number
    }
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema)