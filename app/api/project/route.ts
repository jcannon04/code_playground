import { NextResponse } from "next/server";
import Project from "../../db/models/project";
import mongoose from "mongoose";

export async function GET(request: Request) {
    const uri = process.env.MONGO_URI || '';
    try {
        await mongoose.connect(uri);
        let posts = await Project.find({});
        await mongoose.disconnect();

        return NextResponse.json(posts);
    } catch (error : any) {
        return NextResponse.error();
    }

}

export async function POST(request: Request) {
    const uri = process.env.MONGO_URI || '';
    try {
        const { title, files, lab, languageId } = await request.json();
        await mongoose.connect(uri);
        let post = await Project.create({ title, files, lab, languageId });
        await mongoose.disconnect();

        return NextResponse.json(post);

    } catch (error : any) {
        console.log(error.message);
        return NextResponse.error();
    }

}