"use client";
import React, { useEffect, useState } from "react";
import RoleSelect from "../components/RoleSelect";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { pusherClient } from "@/lib/pusher";
import TeacherDashBoard from "./components/Teacher";
import StudentDashBoard from "./components/Student";
const DashBoard = () => {
  //const { isSignedIn, user, isLoaded } = useUser();
  const { isSignedIn, user, isLoaded } = useUser();
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [dbUser, setDbUser] = useState(null);

  async function PostUser() {
    if (isLoaded) {
      const response = await axios.post("http://localhost:3000/api/User", {
        username: user.username,
        email: user.emailAddresses[0].emailAddress,
      });
      if (response.data.newUser === true) {
        setOpenModal("dismissible");
      }
      var presenceChannel = pusherClient.subscribe('presence-members-online')
      pusherClient.subscribe(`request-channel-${user.username}`);
      pusherClient.bind('online', (message: string)=> {
        console.log(presenceChannel);
      })
      setDbUser(response.data.databaseUser);
    }
  }
  useEffect(() => {
    PostUser();
  }, [user]);

  return (
    <>
      <RoleSelect openModal={openModal} setOpenModal={setOpenModal} />

      {dbUser?.role === "Teacher" && (
        <TeacherDashBoard dbUser={dbUser} setDbUser={setDbUser} />
      )}
      {dbUser?.role === "Student" && <StudentDashBoard dbUser={dbUser} />}
    </>
  );
};

export default DashBoard;
