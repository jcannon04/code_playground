"use client"
import Link from "next/link";
import PusherServer from "pusher-js"
import { pusherClient } from '@/lib/pusher';
import React, { useState, useEffect } from "react";
import axios from "axios";
const DemoPage = () => {
    // const pusher = new Pusher({
    //     appId: "1677536",
    //     key: "f2e9097c92705d394593",
    //     secret: "b18814e8f0a3a3c46b18",
    //     cluster: "us2",
    //     useTLS: true
    // });
    const [incommingMessages, setIncommingMessages] = useState('');
    useEffect(() => {
        pusherClient.subscribe("my-channel");

        // console.log("Connected to Pusher");
        pusherClient.bind('incoming-message', (text: string) => {
            setIncommingMessages(text);
        })

        // return () => {
        //     pusherClient.unsubscribe("my-channel");
        // }
    }, [])

    const sendMessage = async (message: string) => {
        let response = await axios.post("/api/message", { text: message });
        console.log(response.data);
        
     }
    return (
        <div className="h-full flex items-center justify-center mt-12">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold mb-4">Welcome to CodeCrewLabs</h1>
                <p className="mb-6">
                    CodeCrewLabs is an interactive e-learning environment with a codepen-like web playground.
                    You can create projects in multiple programming languages, practice coding, and more!
                </p>
                <Link href="/demo">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                        Try Now!
                    </button>
                </Link>
                    <button onClick={()=> sendMessage("test")}>
                        Channel Connection
                </button>
                <p>{incommingMessages}</p>
            </div>
        </div>
    );
};

export default DemoPage;
