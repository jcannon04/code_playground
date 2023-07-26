"use client";

import React, { useState, useEffect } from "react";
import { emmetHTML } from "emmet-monaco-es";
import { generateAnswer } from "../ai/webDevHelper";
import files from "../files/react";
import reactIframeBoiler from "../iframes/reactBoilerPlate";
import WebEditor from "../components/WebEditor";
import FileManager from "../components/FileManager";

const buttonStyles = {
  fontFamily: "monospace",
  backgroundColor: "rgb(31, 31, 31)",
  color: "rgb(15, 228, 15)",
  borderRadius: "4px",
  padding: "10px 20px",
  cursor: "pointer",
  marginBottom: "2px",
  transition: "background-color 0.2s",
};

const textAreaStyles = {
  width: "100%",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  resize: "none",
  marginBottom: "8px",
};

function WebPlayground() {
  const [fileName, setFileName] = useState("index.html");
  const [studentQuestion, setStudentQuestion] = useState("");
  const [isAskingChat, setIsAskingChat] = useState(false);
  const disposeEmmetHTMLRef = React.useRef();
  const file = files[fileName];

  useEffect(() => {
    return () => {
      if (disposeEmmetHTMLRef.current) {
        disposeEmmetHTMLRef.current();
      }
    };
  }, []);

  useEffect(() => {
    // Import the Monaco Editor and other browser-specific dependencies here
    import("monaco-editor/esm/vs/basic-languages/html/html.contribution");
    import(
      "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution"
    );
    import("monaco-editor/esm/vs/basic-languages/css/css.contribution");
    updatePreview();
  }, [fileName]);

  const handleEditorWillMount = (monaco) => {
    disposeEmmetHTMLRef.current = emmetHTML(monaco);
  };

  const handleFileChange = (fileName) => {
    setFileName(fileName);
  };

  const updatePreview = () => {
    const javascript = files["script.js"];
    const css = files["style.css"];
    const html = files["index.html"];
    const iframe = document.createElement("iframe");
    const preview = document.getElementById("preview");

    const iframeContent = reactIframeBoiler(css, html, javascript);

    iframe.srcdoc = iframeContent;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";

    preview.innerHTML = "";
    preview.appendChild(iframe);
  };

  const handleCodeChange = (value) => {
    const updatedFile = { ...file, value };
    files[fileName] = updatedFile;

    if (fileName != "script.js") {
      updatePreview();
    }
  };

  const handleRunClick = () => {
    updatePreview();
  };
  const handleAskChat = () => {
    setIsAskingChat(true);
  };

  const handleSubmitQuestion = async () => {
    // Handle submitting the student's question to the chat API here
    // You can use the 'generateAnswer' function to fetch the answer and update the state accordingly
    // For example:
    const answer = await generateAnswer({
      css: files["style.css"].value,
      javascript: files["script.js"].value,
      html: files["index.html"].value,
      studentQuestion,
    });

    // // Handle the answer here, e.g., you can display it in a modal or log it to the console
    console.log("Chat Answer:", answer);

    // Reset the state and hide the text area
    setIsAskingChat(false);
    setStudentQuestion("");
  };

  const editorOptions = {
    fontSize: 16,
  };

  return (
    <>
      {!isAskingChat && (
        <div>
          <FileManager
            handleFileChange={handleFileChange}
            handleRunClick={handleRunClick}
            fileName={fileName}
          />
          <WebEditor
            height='80vh'
            theme='vs-dark'
            path={file.name}
            defaultLanguage={file.language}
            defaultValue={file.value}
            onChange={handleCodeChange}
            options={editorOptions}
            beforeMount={handleEditorWillMount}
          />
          <button style={buttonStyles} onClick={handleAskChat}>Ask Chat</button>
        </div>
      )}
      {isAskingChat && (
        <div>
          <textarea
            rows='4'
            cols='50'
            style={textAreaStyles}
            value={studentQuestion}
            onChange={(e) => setStudentQuestion(e.target.value)}
            placeholder="Ask your question here..."
          />
          <br />
          <button style={buttonStyles} onClick={handleSubmitQuestion}>
            Submit
          </button>
        </div>
      )}
    </>
  );
}

export default WebPlayground;
