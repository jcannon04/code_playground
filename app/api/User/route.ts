// Import necessary libraries and modules
import { NextResponse } from "next/server";
import User from "../../db/models/User";
import Project from "../../db/models/project";
import mongoose from "mongoose";

// URI for MongoDB connection
const uri = process.env.MONGO_URI_DOCKER || '';

// Establish an initial connection to MongoDB
mongoose.connect(uri);

//GET request to get all Users
export async function GET(request: Request) {
    try {
        await mongoose.connect(uri);
        let allUsers = await User.find({});
        return NextResponse.json(allUsers);
    } catch (err) { 
        return NextResponse.json(err);
    }
}

// Handle POST requests
export async function POST(request: Request) {
    // Establish a connection to MongoDB
    mongoose.connect(uri);

    try {
        // Extract required data from the request body
        let { students, email, username, role, teachers } = await request.json();

        // Check if a user with the provided email already exists
        let databaseUser = await User.findOne({ email: email });

        // If user exists, return a response indicating that the user is not new
        if (databaseUser) {
            return NextResponse.json({ newUser: false });
        }

        // Check and initialize students and teachers arrays if they are not provided or empty
        if (students === undefined || students.length === 0) {
            students = [];
        }
        if (teachers === undefined || teachers.length === 0) {
            teachers = [];
        }

        // Create the user object to be saved in the database
        databaseUser = { email, username, students, role, teachers };

        // Insert the new user into the database
        await User.create(databaseUser);

        // Return a response indicating that a new user was created
        return NextResponse.json({ newUser: true });

    } catch (err) {
        // Handle any errors that occur during the process
        return NextResponse.json("error", err.message);
    }
}

// Handle PUT requests to update user data
export async function PUT(request: Request) {
    try {
        // Connect to MongoDB
        await mongoose.connect(uri);

        // Extract the user's ID and new role from the request body
        const { username, role } = await request.json();

        // Update the user's role in the database
        const updatedUser = await User.findOneAndUpdate(
            { username: username },  // Use the user's ID to find the correct record
            { role: role },  // Update the role field with the new value
            { new: true }  // Return the updated user instead of the original
        );

        // If the user was not found, return a 404 error
        if (!updatedUser) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }

        // Return the updated user data
        return NextResponse.json(updatedUser);

    } catch (err) {
        // Handle any errors that occur during the update process
        console.log(err);
        return NextResponse.json({ message: "Error updating user" }, { status: 500 });
    }
}
