"use client";

import React, { useState, useEffect, useRef } from "react";
import { emmetHTML } from "emmet-monaco-es";
import starterFiles from "../files/react";
import reactIframeBoiler from "../iframes/reactBoilerPlate";
import WebEditor from "../components/WebEditor";
import FileManager from "../components/FileManager";
import AskChat from "../components/AskChat";
import { useCompletion } from "ai/react";
import Lab from "../components/Lab";

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

const saveFilesToLocalStorage = (files) => {
  localStorage.setItem("webPlaygroundFiles", JSON.stringify(files));
};

const loadFilesFromLocalStorage = () => {
  const storedFiles = localStorage.getItem("webPlaygroundFiles");
  return storedFiles ? JSON.parse(storedFiles) : starterFiles;
};

function WebPlayground() {
  const [fileName, setFileName] = useState("index.html");
  const [mode, setMode] = useState("preview");
  const [files, setFiles] = useState(starterFiles);
  const [codeChangedTimeout, setCodeChangedTimeout] = useState(null);
  const disposeEmmetHTMLRef = useRef();
  const file = files[fileName];

  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    body: {
      css: files["style.css"].value,
      html: files["index.html"].value,
      js: files["script.js"].value,
    },
  });

  useEffect(() => {
    return () => {
      if (disposeEmmetHTMLRef.current) {
        disposeEmmetHTMLRef.current();
      }
    };
  }, []);

  useEffect(() => {
    const loadedFiles = loadFilesFromLocalStorage();
    setFiles(loadedFiles); // Update files using the loaded data
  }, []);

  useEffect(() => {
    // Import the Monaco Editor and other browser-specific dependencies here
    import("monaco-editor/esm/vs/basic-languages/html/html.contribution");
    import(
      "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution"
    );
    import("monaco-editor/esm/vs/basic-languages/css/css.contribution");
  
  }, [fileName]);

  useEffect(() => {
    if (mode == "preview") {
      updatePreview();
    }
  }, [files, mode])

  const handleEditorWillMount = (monaco) => {
    disposeEmmetHTMLRef.current = emmetHTML(monaco);
  };

  const handleFileChange = (fileName) => {
    setFileName(fileName);
  };

  const updatePreview = () => {
    const iframe = document.createElement("iframe");
    const preview = document.getElementById("preview");
    const javascript = files["script.js"];
    const css = files["style.css"];
    const html = files["index.html"];
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

    const updatedFiles = { ...files, [fileName]: updatedFile };
    
    if (codeChangedTimeout) {
      clearTimeout(codeChangedTimeout);
    }
    
    const newTimeout = setTimeout(() => {
      setFiles(updatedFiles);
      saveFilesToLocalStorage(updatedFiles);
    }, 1000);

    setCodeChangedTimeout(newTimeout);
    
  };
  
  const handleRunClick = () => {
    updatePreview();
  };

  const handleSwitchToPreview = () => {
    setMode("preview");
  };

  const handleSwitchToChat = () => {
    setMode("chat");
  };

  const handleSwitchToLab = () => {
    setMode("quiz")
  }

  const editorOptions = {
    fontSize: 16,
  };

  return (
    <>
      <button style={mode == "preview" ? {...buttonStyles, opacity: "0.6"} : buttonStyles} onClick={handleSwitchToPreview}>
        Preview
      </button>
      <button style={mode == "chat" ? {...buttonStyles, opacity: "0.6"} : buttonStyles } onClick={handleSwitchToChat}>
        Chat
      </button>
      <button style={mode == "quiz" ? {...buttonStyles, opacity: "0.6"} : buttonStyles} onClick={handleSwitchToLab}>
        Lab
      </button>
      <FileManager
        handleFileChange={handleFileChange}
        handleRunClick={handleRunClick}
        fileName={fileName}
      />
      <div style={{ display: "flex" }}>
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
        {mode == "preview" && (
          <div
            id='preview'
            style={{ flex: 1, height: "80vh", border: "1px solid #ccc" }}
          ></div>
        )}
        {mode == "chat" && (
          <AskChat
            handleSubmit={handleSubmit}
            input={input}
            handleInputChange={handleInputChange}
            completion={completion}
          />
        )}

        {mode == "quiz" && (
          <Lab />
        )}
      </div>
    </>
  );
}

export default WebPlayground;
