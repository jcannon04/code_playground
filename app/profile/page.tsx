"use client"
import { UserProfile } from '@clerk/nextjs';

const ProfilePage = () => {
  return (
    <div className="flex justify-center">
      <UserProfile />
    </div>
  );
};

export default ProfilePage;