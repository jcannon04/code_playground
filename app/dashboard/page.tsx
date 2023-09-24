"use client"
import React, {useEffect, useState} from "react";
import Link from "next/link";
import axios from "axios";
import { useUser, currentUser } from "@clerk/nextjs";
const DashBoard = () => {
//     const { isSignedIn, user, isLoaded } = useUser();
//    console.log(user);
    
//     const {  username } = user;
//     let userEmail = user.emailAddresses[0].emailAddress
//     let helloUser = isLoaded ? <div>{user.username}</div> : undefined;
   
//     useEffect(() => {
//         axios.post('./api/Users');

//      })

    return (
        <>
            {/* {helloUser} */}
            <div className='flex justify-center items-center h-96'>
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
                </div>
            </div>
        </>
    );
};

export default DashBoard;
