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

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        const userData = await request.json(); // Get the updated user data from the request body
        const user = await User.findByIdAndUpdate(id, userData, { new: true }); // Update the user
        if (!user) throw new Error('User not found'); // Handle user not found
        return NextResponse.json(user); // Return the updated user
    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.error(); // Return a generic error response
    }
}


export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    try {
        const user = await User.findByIdAndRemove(id); // Remove the user
        if (!user) throw new Error('User not found'); // Handle user not found
        return NextResponse.json({ message: 'User successfully deleted', userId: id }); // Return success message
    } catch (error) {
        console.error(error); // Log the error for debugging
        return NextResponse.error(); // Return a generic error response
    }
}