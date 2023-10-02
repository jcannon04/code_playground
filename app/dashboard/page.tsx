"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RoleSelect from "../components/RoleSelect";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { Button } from "flowbite-react";
import TeacherDashBoard from "./components/Teacher";
import StudentDashBoard from "./components/Student";
const DashBoard = () => {
    //const { isSignedIn, user, isLoaded } = useUser();
    const { isSignedIn, user, isLoaded } = useUser();
    const [openModal, setOpenModal] = useState<string | undefined>();
    const [dbUser, setDbUser] = useState(null);


    async function PostUser() {
        if (isLoaded) {
            const response = await axios.post('http://localhost:3000/api/User', { username: user.username, email: user.emailAddresses[0].emailAddress });
            if (response.data.newUser === true) {
                setOpenModal("dismissible");
            } 
            setDbUser(response.data.databaseUser);
            console.log(response.data);
            console.log(user.username)
        }

    }
    useEffect(() => {
        PostUser();

    }, [user]);

    return (

        <>
               
        <RoleSelect
        openModal={openModal }
        setOpenModal={ setOpenModal} />
       
       { dbUser?.role === "Teacher" && <TeacherDashBoard dbUser={dbUser} setDbUser={setDbUser}/>}
       { dbUser?.role === "Student" && <StudentDashBoard dbUser={dbUser}/>} 
        

        
        
               

        </>
    );
};

export default DashBoard;
