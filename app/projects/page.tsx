"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';


const ProjectsPage: React.FC = async () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`./api/project`);
        const newProjects = await res.json();
        setProjects(newProjects)
      } catch (error) {
        console.error(error);
      }
    };
    fetchProjects();
  }, [])

  return (
    <div>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projects.map((project) => (
          <li
            key={project._id}
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
          >
            <Link href={`/projects/${project._id}`}>
              <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
            </Link>
          </li>
        ))}
        <li className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex items-center justify-center'>
          <Link href='/create/project'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 w-12 text-gray-500'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9V6a1 1 0 012 0v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H6a1 1 0 010-2h3z'
                clipRule='evenodd'
              />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsPage;