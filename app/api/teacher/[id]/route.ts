import { NextResponse } from "next/server";
import User from "../../../db/models/User";
import Projects from "../../../db/models/project";
import mongoose from "mongoose";
const uri = process.env.MONGO_URI_DOCKER || '';


export async function GET(request: Request, {params}:{params:{id: string}}) {
    try {
        await mongoose.connect(uri);
        let { id } = params;
        let teacher = await User.findById(id);
        if (teacher.role !== 'Teacher') {
            return Promise.reject(new Error('You must be a teacher'))
        }
       return NextResponse.json(teacher.students);
    }
    catch (err) {
       return NextResponse.json(err);
    }
}
