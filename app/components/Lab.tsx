import React, { useEffect } from "react";
import { useCompletion } from "ai/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Lab = ({ sourceCodeObject, projectId, projectLab, setProjectLab }) => {
  const onFinish = async (prompt: any, completion: string) => {
    try {
      const response = await fetch(`/api/project/${projectId}`, {
        method: "PUT",
        body: JSON.stringify({ lab: completion }),
      });

      const newProject = await response.json();
      const newProjectLab = newProject.lab;
      setProjectLab(newProjectLab);
    } catch (err) {
      console.log(err.message);
    }
  };

  const { completion, complete, setCompletion } = useCompletion({
    body: {
      ...sourceCodeObject,
      quiz: true,
    },
    onFinish,
  });

  useEffect(() => {
    setCompletion(projectLab);
  }, []);

  const handleNewLabClick = async (e) => {
    await complete("");
  };

  return (
    <div style={{
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      height: "80vh",
      border: "1px solid #ccc",
      overflow: "scroll",
    }}>
      <div style={{
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent:"center"
        }}>
        <ReactMarkdown>{completion}</ReactMarkdown>
      </div>
      <button
        onClick={handleNewLabClick}
        className='bg-gray-800 text-green-400 font-mono rounded-md py-2 px-4 cursor-pointer mt-2 transition duration-200 hover:bg-green-400 hover:text-gray-800'
      >
        New Lab
      </button>
    </div>
  );
};

export default Lab;
