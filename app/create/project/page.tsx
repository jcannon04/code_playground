"use client";
import LanguageSelect from "@/app/components/LanguageSelect";
import languages from "../../data/languages.json";
import { useRouter } from "next/navigation";

const NewProjectForm = () => {
  const router = useRouter();
  const selectHandler = () => {
    return;
  };


  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-4xl text-center mt-4'>Create Project</h1>
      <div className='mt-12'>
        <LanguageSelect
          languages={languages}
          selectHandler={selectHandler}
        />
      </div>
    </div>
  );
};

export default NewProjectForm;
