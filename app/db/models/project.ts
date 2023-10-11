// Import the mongoose library to be used for database modeling
import mongoose from 'mongoose';

// Define a schema for a Project
const projectSchema = new mongoose.Schema({
    // Define a field 'title' of type String for the project's title
    title: {
        type: String,
    },
    // Define a list 'files' that will store information about each file in the project
    files: [{
        // Define a field 'fileName' of type String for the name of the file
        fileName: {
            type: String,
        },
        // Define a field 'sourceCode' of type String to store the actual code/content of the file
        sourceCode: {
            type: String,
        },
        // Define a field 'languageId' of type Number to identify the programming language of the file
        languageId: {
            type: Number
        }
    }],
    // Define a field 'lab' of type String to store information about which lab the project belongs to
    lab: {
        type: String,
    },
    // Define a field 'languageId' of type Number at the project level to identify the primary programming language of the project
    languageId: {
        type: Number
    },
    // Define a field 'owner' of type String to identify the project owner of the project
    owner: {
        type: String
    },
    assignedBy: {
        type: String
    },
    // Define a field 'description' of type String to identify the project description of the project
    description:{
        type: String
    }
    
});

// Export the Project model. If the Project model already exists, then use that, otherwise create a new model using the projectSchema
export default mongoose.models.Project || mongoose.model('Project', projectSchema);
