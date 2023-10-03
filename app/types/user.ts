import { Schema } from 'mongoose';

interface IUser {
    username: string;
    email: string;
    role: 'Student' | 'Teacher' | 'Regular User';
    teachers: Schema.Types.ObjectId[];
    students: Schema.Types.ObjectId[];
    createdAt: Date;
    projects: Schema.Types.ObjectId[];
}

export default IUser;