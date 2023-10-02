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
export async function GET(request: Request) {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(uri);

        // Extract the teacher's ID from the parameters
      //  let { id } = params;

        // Find the teacher by their ID
        let students = await User.find();

       let filteredStudents = students.filter((student)=> student.role == "Student")

        // Return the list of students associated with the teacher
        return NextResponse.json(filteredStudents);

    
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
        const { teacherId, studentId } = await request.json();

        // Find the teacher and student by their email addresses
        let teacher = await User.findOne({ _id: teacherId });
        let student = await User.findOne({ _id: studentId });

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


        // Fetch the updated teacher's details
        let updatedTeacher = await User.findOne({ _id: teacherId });

        // Return the updated teacher's details
        return NextResponse.json(updatedTeacher);
    } catch (error: any) {
        // Log and handle any errors that occur
        console.log(error.message);
        return NextResponse.json({ error }, { status: 500 });
    }
}
