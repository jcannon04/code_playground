"use client";

import React, { useState, useEffect } from "react";
import { emmetHTML } from "emmet-monaco-es";
import { generateAnswer } from "../ai/webDevHelper";
import files from "../files/react";
import reactIframeBoiler from "../iframes/reactBoilerPlate";
import chatIframeBoiler from "../iframes/chatBoilerPlate";
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
  float: "right",
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
  const [mode, setMode] = useState("preview");

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
  }, [fileName, mode]);

  const handleEditorWillMount = (monaco) => {
    disposeEmmetHTMLRef.current = emmetHTML(monaco);
  };

  const handleFileChange = (fileName) => {
    setFileName(fileName);
  };

  const updatePreview = () => {
    let iframeContent;
    const iframe = document.createElement("iframe");
    const preview = document.getElementById("preview");
    const javascript = files["script.js"];
    const css = files["style.css"];
    const html = files["index.html"];

    if (mode == "preview") {
      console.log("preview")
      iframeContent = reactIframeBoiler(css, html, javascript);
    }

    if (mode == "chat") {
      iframeContent = chatIframeBoiler(
        files["style.css"].value,
        files["script.js"].value,
        files["index.html"].value,
        generateAnswer
      );
    }

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

  const handleSwitchToPreview = () => {
    setMode("preview");
  };

  const handleSwitchToChat = () => {
    setMode("chat");
  };

  const editorOptions = {
    fontSize: 16,
  };

  return (
    <>
      <div>
        <button style={buttonStyles} onClick={handleSwitchToPreview}>
          Preview
        </button>
        <button style={buttonStyles} onClick={() => handleSwitchToChat()}>
          Chat
        </button>
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
      </div>
    </>
  );
}

export default WebPlayground;
