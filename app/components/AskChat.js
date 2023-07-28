import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useRef, useEffect } from "react";

const textAreaStyles = {
  width: "100%",
  padding: "10px",
  fontSize: "1em",
  borderRadius: "4px",
  border: "1px solid #ccc",
  resize: "none",
  marginBottom: "8px",
};
const buttonStyles = {
  fontFamily: "monospace",
  backgroundColor: "rgb(31, 31, 31)",
  color: "rgb(15, 228, 15)",
  borderRadius: "4px",
  padding: "10px 20px",
  cursor: "pointer",
  marginBottom: "2px",
  transition: "background-color 0.2s",
  float: "right",
};
const AskChat = ({ completion, input, handleInputChange, handleSubmit }) => {
    const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      style={{
        flex: 1,
        height: "80vh",
        border: "1px solid #ccc",
        overflow: "auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <ReactMarkdown>{completion}</ReactMarkdown>
        <div style={{display: "flex", alignItems: "baseline"}}>
        <input
          type='text'
          placeholder='Ask your question here...'
          style={textAreaStyles}
          value={input}
          onChange={handleInputChange}
          ref={inputRef}
        />
        <button style={buttonStyles} type='submit'>
          Ask
        </button>
        </div>
      </form>
    </div>
  );
};

export default AskChat;
