import { NextResponse } from "next/server";
import User from "@/app/db/models/User";
import mongoose from "mongoose";
const uri = process.env.MONGO_URI_DOCKER || '';
mongoose.connect(uri);
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        const user = await User.findById(id);
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.error();
    }
}