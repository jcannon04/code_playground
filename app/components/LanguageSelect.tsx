import { useState } from "react";
import Files from "../types/projectFiles";
const LanguageSelect = ({ languages }) => {
  const [title, setTitle] = useState<string>("")
  const [languageId, setLanguageId] = useState<Number>(10);
  const [files, setFiles] = useState<Files>();
  const [lab, setLab] = useState<string>()

  const handleClick = async () => {
    try {
      let newProject = await fetch('/api/project', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({})
      })
  
      console.log(newProject)
    } catch(error) {
      console.log(error.message)
    }
  };

  const handleTitleChange = (newTitle : string) => {
    setTitle(newTitle);
  }

  const handleLanguageSelect = (newLanguageId: string) => {
    setLanguageId(parseInt(newLanguageId));
  }

  return (
    <div className='flex flex-col items-start gap-y-4'>
      <div className="w-full">
        <label
          htmlFor='projectTitle'
          className='block mb-2 font-semibold'
        >
          Title
        </label>
        <input
          type='text'
          name='projectTitle'
          id='projectTitle'
          onChange={(e) => handleTitleChange(e.target.value)}
          className='block border border-gray-300 rounded px-3 py-2 w-full'
          value={title}
        />
      </div>
      <div>
        <label
          htmlFor='languageSelect'
          className='block mb-2 font-semibold'
        >
          Select Template
        </label>
        <select
          id='languageSelect'
          onChange={(e) =>
            handleLanguageSelect(
              e.target.selectedOptions[0].getAttribute("data-key")
            )
          }
          className='border border-gray-300 rounded px-3 py-2'
        >
          {languages.map((language) => (
            <option
              key={language.id}
              value={`${language.editor}-${language.id}`}
              data-key={language.id}
            >
              {language.name}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleClick}
        className='mt-4 px-6 py-2 bg-black text-white rounded hover:bg-slate-600 w-full'
      >
        Create
      </button>
    </div>
  );
};

export default LanguageSelect;
