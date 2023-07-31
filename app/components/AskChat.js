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
};

const buttonStyles = {
  fontFamily: "monospace",
  backgroundColor: "rgb(31, 31, 31)",
  color: "rgb(15, 228, 15)",
  borderRadius: "4px",
  padding: "11px 20px",
  cursor: "pointer",
  transition: "background-color 0.2s",
  float: "right",
};

const chatDisclosure = "ChatGPT may produce inaccurate information about people, places, or facts"
const AskChat = ({ completion, input, handleInputChange, handleSubmit }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
      <div style={{
          margin: "10px",
          display: "block"
        }}>
      <ReactMarkdown>{completion || chatDisclosure}</ReactMarkdown>
      </div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            position: "sticky",
            top: "0px",
          }}
        >
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
