"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import RoleSelect from "../components/RoleSelect";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { Button } from "flowbite-react";

const DashBoard = () => {
    //const { isSignedIn, user, isLoaded } = useUser();
    const { isSignedIn, user, isLoaded } = useUser();
    const [openModal, setOpenModal] = useState<string | undefined>();
  

    async function PostUser() {
        if (isLoaded) {
            const response = await axios.post('http://localhost:3000/api/User', { username: user.username, email: user.emailAddresses[0].emailAddress });
            if (response.data.newUser === true) {
                setOpenModal("dismissible");
           }
            console.log(response.data);
             console.log(user.username)
         }
 
    }
    useEffect(() => {
        PostUser();
       
    }, [user]);

    return (
        <>
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
                    <RoleSelect
                        openModal={openModal }
                        setOpenModal={ setOpenModal} />
                </div>
            </div>
        </>
    );
};

export default DashBoard;
