import { NextResponse } from "next/server";
import User from "../../db/models/User";
import Project from "../../db/models/project";
import mongoose from "mongoose";
const uri = process.env.MONGO_URI_DOCKER || '';

mongoose.connect(uri);

export async function GET(request: Request) {
    return NextResponse.json("success",);
}

export async function POST(request: Request) {
    // Try to establish a connection to MongoDB
    try {
        await mongoose.connect(uri);
    } catch (err) {
        return NextResponse.json("Failed to connect to MongoDB:", err.message);
    }

    try {
        let { students, email, username, role, teachers } = await request.json();
        let databaseUser = await User.findOne({ email: email });


        if (databaseUser) {
            return NextResponse.json(databaseUser);

        }

        if (students === undefined || students.length === 0) {
            students = [];
        }

        if (teachers === undefined || teachers.length === 0) {
            teachers = [];
        }


        // Wait for the data to be inserted
        let user = {  email, username, students, role, teachers}
        
       await User.create(user);
        
       //const newUser = await (new User(user)).save().then(doc => User.findById(doc._id));

       return NextResponse.json(user);
        

    } catch (err) {
        return NextResponse.json("error", err.message);
    } finally {
        try {
            // Disconnect from MongoDB after operations are done
            await mongoose.disconnect();
        } catch (disconnectErr) {
            console.error("Failed to disconnect from MongoDB:", disconnectErr.message);
        }
    }
}




