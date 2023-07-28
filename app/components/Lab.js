import React, { useEffect, useState } from "react";
import { useCompletion } from "ai/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Lab = () => {

  const onFinish = (prompt, completion) => {
    localStorage.setItem("local-completion", completion);
  };

  const { completion, complete, setCompletion } = useCompletion({
    body: {
      quiz: true,
    },
    onFinish,
  });

  useEffect(() => {
    const localCompletion = localStorage.getItem("local-completion") || null;
    if (localCompletion) {
      setCompletion(localCompletion);
    }
  }, []);

  const handleNewLabClick = async (e) => {
    localStorage.removeItem("local-completion");
    await complete();
  };

  return (
    <div
      style={{
        flex: 1,
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
        }}
      >
        <ReactMarkdown>{completion}</ReactMarkdown>
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
