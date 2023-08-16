import React, { useEffect, useState } from "react";
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
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        height: "80vh",
        border: "1px solid #ccc",
        overflow: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
          width: "100%",
        }}
      >
        <div
          style={{
            margin: "10px",
            display: "block",
          }}
        >
          <ReactMarkdown>{completion}</ReactMarkdown>
        </div>
        <button
          onClick={handleNewLabClick}
          style={{
            fontFamily: "monospace",
            backgroundColor: "rgb(31, 31, 31)",
            color: "rgb(15, 228, 15)",
            borderRadius: "4px",
            padding: "10px 20px",
            cursor: "pointer",
            marginBottom: "2px",
            transition: "background-color 0.2s",
          }}
        >
          New Lab
        </button>
      </div>
    </div>
  );
};

export default Lab;
