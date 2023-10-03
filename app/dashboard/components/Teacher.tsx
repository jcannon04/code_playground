"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RoleSelect from "../../components/RoleSelect";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { Sidebar } from 'flowbite-react';
import {  HiChartPie, HiInbox, HiUser, HiViewBoards } from 'react-icons/hi';
import StudentModal from "./StudentModal";

const TeacherDashBoard = ({ dbUser, setDbUser }) => {
    //const { isSignedIn, user, isLoaded } = useUser();
    const { isSignedIn, user, isLoaded } = useUser();
    const [openModal, setOpenModal] = useState<string | undefined>();
    const [openStudentModal, setOpenStudentModal] = useState("");
    const [students, setStudents] = useState([]);

    async function PostUser() {
        if (isLoaded) {
            const response = await axios.post('/api/User', { username: user.username, email: user.emailAddresses[0].emailAddress });
            if (response.data.newUser === true) {
                setOpenModal("dismissible");
            }
            console.log(response.data);
            console.log(user.username)
        }

    }

    async function GetStudents() {
        let studentsArray = [];
        for (let i = 0; i < dbUser.students.length; i++) {
            let studentId = dbUser.students[i];
            const response = await axios.get(`/api/User/${studentId}`);
            console.log(response.data);
            studentsArray.push(response.data);
        }

        console.log(studentsArray)
        return studentsArray;
    }
    //GetStudents();

    async function getAllStudents() {
        const response = await axios.get(`/api/User`);

        let allStudents = await response.data.filter((user: { role: string; }) => user.role == "Student");
        console.log(allStudents);
        setStudents(allStudents);        
    }
   //getAllStudents();
console.log(students)

    async function AssignProjects(studentEmail, projectId) {
        const response = await axios.post(`/api/AssignLab`, { teacherEmail: dbUser.email, studentEmail: studentEmail, projectId: projectId })

    }


    useEffect(() => {
        PostUser();
        getAllStudents();
        console.log(getAllStudents());
    }, [user]);

    return (
        <>

            <Sidebar id="default-sidebar" className="fixed top-20 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar" >
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={HiChartPie}
                        >
                            <p>
                                Dashboard
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiViewBoards}
                        >
                            <p>
                                Courses
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={HiInbox}
                        >
                            <p>
                                Inbox
                            </p>
                        </Sidebar.Item>
                        <Sidebar.Item
                        onClick={()=>{setOpenStudentModal("dismissible"); getAllStudents()}}
                            icon={HiUser}
                          
                        >
                            <p >
                                Students
                            </p>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
            <div className='flex justify-center items-center h-96'>
                {/* <Button onClick={() => setOpenModal('dismissible')}>Toggle modal</Button> */}
                <div className='text-center'>

                    <Link href="/create/project">
                        <button className='bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mr-2'>
                            New Project
                        </button>
                    </Link>
                    <Link href="/projects">
                        <button className='bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded ml-2'>
                            Browse Projects
                        </button>
                    </Link>

                    <div className="container "></div>
                    <RoleSelect
                        openModal={openModal}
                        setOpenModal={setOpenModal} />

                </div>
                <StudentModal

                    openStudentModal={openStudentModal}
                    setOpenStudentModal={setOpenStudentModal}
                    students={students} />
            </div>
        </>
    );
};

export default TeacherDashBoard;
