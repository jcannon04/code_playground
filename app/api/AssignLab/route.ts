import { NextResponse } from "next/server";
import Student from "../../db/models/User";
import mongoose from "mongoose";
import Project from "@/app/db/models/project";
const uri = process.env.MONGO_URI_DOCKER || '';

export async function POST(request: Request) {
    try {
        await mongoose.connect(uri);

        const { studentEmail, teacherEmail, projectId } = await request.json();
        
        // Find the student by email
        const student = await Student.findOne({ email: studentEmail });
        const project = await Project.findOne({_id: projectId})
        if (!student) {
            return NextResponse.json({ error: 'Student not found' }, { status: 404 });
        }

        // Check if this teacher is already associated with the student
        const teacherExists = student.teachers.some((teacher: { email: any; }) => teacher.email === teacherEmail);
        if (!teacherExists) {
            return NextResponse.json({ error: 'Teacher is not associated with this student' }, { status: 403 });
        }

        // Add the new project to the student's projects array
        const newProject = await Project.create({title: project.title, lab: project.lab, files: project.files, languageId: project.languageId, owner: studentEmail, assignedBy: teacherEmail})
       

        return NextResponse.json(newProject);

    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ error }, { status: 500 });
    } finally {
        // Make sure to disconnect from the database
        await mongoose.disconnect();
    }
}