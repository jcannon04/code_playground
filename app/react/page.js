"use client";

import React, { useState, useEffect } from "react";
import { emmetHTML } from "emmet-monaco-es";

import files from "../files/react";
import reactIframeBoiler from "../iframes/reactBoilerPlate";
import WebEditor from "../components/WebEditor";
import FileManager from "../components/FileManager";

function WebPlayground() {
  const [fileName, setFileName] = useState("index.html");
  const disposeEmmetHTMLRef = React.useRef();
  const file = files[fileName];

  useEffect(() => {
    // Import the Monaco Editor and other browser-specific dependencies here
    import("monaco-editor/esm/vs/basic-languages/html/html.contribution");
    import(
      "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution"
    );
    import("monaco-editor/esm/vs/basic-languages/css/css.contribution");
    disposeEmmetHTMLRef.current ? disposeEmmetHTMLRef.current() : null;
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

  const editorOptions = {
    fontSize: 16,
  };

  return (
    <>
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
    </>
  );
}

export default WebPlayground;
