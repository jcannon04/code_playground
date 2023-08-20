"use client"
import React from "react";
import Link from "next/link";
const DashBoard = () => {
  return (
    <>
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
