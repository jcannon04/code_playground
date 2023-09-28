"use client"
import React from 'react';
import Link from 'next/link';
import ParticlesContainer from './ParticlesContainer';

const DemoPage = () => {
  return (
    <div className="h-full flex items-center justify-center mt-24 relative">
      <ParticlesContainer/>
      <div className="rounded-lg p-8 max-w-md w-full flex flex-col items-center relative z-10">
        <h1 className="text-9xl font-bold mb-24 text-white">
          Welcome to{' '}
          <span className="border-t-4 border-r-4 border-b-4 border-l-4 border-gradient-to-r from-cyan-500 to-blue-500 border-blue-300">
            BitBox
          </span>{' '}
        </h1>
        <p className="mb-6 text-white">
          BitBox is your coding platform and grading platform of the future.
        </p>
        <Link href="/demo">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 hover:animate-glow">
            Try Now!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DemoPage;
