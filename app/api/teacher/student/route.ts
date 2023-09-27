import { NextResponse } from "next/server";
import User from "../../../db/models/User";
import Projects from "../../../db/models/project";
import mongoose from "mongoose";

// MongoDB connection URI
const uri = process.env.MONGO_URI_DOCKER || '';

/**
 * Handles the GET request to fetch a teacher's students.
 * 
 * @param {Request} request - The incoming request object.
 * @param {Object} params - The parameters from the request.
 * @param {string} params.id - The ID of the teacher.
 * @returns {Promise} - A promise that resolves to the teacher's students or an error.
 */
export async function GET(request: Request, {params}:{params:{id: string}}) {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(uri);

        // Extract the teacher's ID from the parameters
        let { id } = params;

        // Find the teacher by their ID
        let teacher = await User.findById({ id });

        // Check if the user is a teacher
        if (teacher.role !== 'Teacher') {
            return Promise.reject(new Error("User is not a teacher."));
        }

        // Return the list of students associated with the teacher
        return NextResponse.json(teacher.students);
    }
    catch (err) {
        // Handle any errors that occur
        return NextResponse.json(err);
    }
}

/**
 * Handles the POST request to assign a project to a student.
 * 
 * @param {Request} request - The incoming request object.
 * @returns {Promise} - A promise that resolves to the updated teacher or an error.
 */
export async function POST(request: Request) {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(uri);

        // Extract the teacher's email, student's email, and project ID from the request body
        const { teacherEmail, studentEmail, projectId } = await request.json();

        // Find the teacher and student by their email addresses
        let teacher = await User.findOne({ email: teacherEmail });
        let student = await User.findOne({ email: studentEmail });

        // Check if both the teacher and student exist in the database
        if (!teacher || !student) {
            return NextResponse.json({ error: "Teacher or Student not found" }, { status: 404 });
        }

        // Add the student's ID to the teacher's list of students (if not already added)
        if (!teacher.students.includes(student._id)) {
            teacher.students.push(student._id);
        }

        // Add the teacher's ID to the student's list of teachers (if not already added)
        if (!student.teachers.includes(teacher._id)) {
            student.teachers.push(teacher._id);
        }

        // Save the updated teacher and student to the database
        await teacher.save();
        await student.save();

        // Find the project by its ID
        let project = await Projects.findOne({ _id: projectId });

        // Create a new project for the student based on the provided project details
        await Projects.create({
            title: project.title,
            files: project.files,
            lab: project.lab,
            languageId: project.languageId,
            owner: student._id,  // Set the student as the owner of the project
            assignedBy: teacher.email // Record the teacher's email as the one who assigned the project
        });

        // Fetch the updated teacher's details
        let updatedTeacher = await User.findOne({ email: teacherEmail });

        // Return the updated teacher's details
        return NextResponse.json(updatedTeacher);
    } catch (error: any) {
        // Log and handle any errors that occur
        console.log(error.message);
        return NextResponse.json({ error }, { status: 500 });
    }
}
