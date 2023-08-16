import { NextResponse } from "next/server";
import Project from "../../../db/models/project";
import mongoose from "mongoose";

const uri = process.env.MONGO_URI || '';
mongoose.connect(uri);

//get a project
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        const project = await Project.findById(id);
        return NextResponse.json(project);
    } catch (error) {
        return NextResponse.error();
    }
}

// delete a project
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        await Project.findByIdAndDelete(id);
        return NextResponse.json({});
    } catch (error) {
        return NextResponse.error();
    }
}

//update a project
export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { lab } = await request.json();
    const { id } = params;
    
    try {
        // Update the project using the correct _id value
        await Project.findByIdAndUpdate(id, { lab });

        // Retrieve the updated project using the correct _id value
        const updatedProject = await Project.findById(id);

        // Return the response with the updated project
        return NextResponse.json(updatedProject , { status: 201 });
    } catch (error) {
        // Handle the error and return an appropriate response
        return NextResponse.json({ error }, { status: 500 });
    }
}
