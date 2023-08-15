// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { emmetHTML } from "emmet-monaco-es";
// import starterFiles from "../files/basicWeb";
// import reactIframeBoiler from "../iframes/reactBoilerPlate";
// import WebEditor from "../components/WebEditor";
// import FileManager from "../components/FileManager";
// import AskChat from "../components/AskChat";
// import Lab from "../components/Lab";
// import { compile } from "../compiler/judge";
// import codeOutputBoiler from "../iframes/codeOutputboiler";
// import PreviewNav from "../components/previewNav";
// import Preview from "../components/Preview";
// import languages from "../data/languages.json";

// import { SourceCodeObject } from "../types/sourceCodeObject";
// import { editor } from "monaco-editor";

// const saveFilesToLocalStorage = (files) => {
//   localStorage.setItem("webPlaygroundFiles", JSON.stringify(files));
// };

// const loadFilesFromLocalStorage = () => {
//   const storedFiles = localStorage.getItem("webPlaygroundFiles");
//   return storedFiles ? JSON.parse(storedFiles) : starterFiles;
// };

// function WebPlayground() {
//   const [fileName, setFileName] = useState("index.html");
//   const [mode, setMode] = useState("preview");
//   const [displayFileManager, setDisplayFileManager] = useState(true);
//   const [files, setFiles] = useState(starterFiles);
//   const [codeChangedTimeout, setCodeChangedTimeout] = useState(null);
//   const disposeEmmetHTMLRef = useRef<() => void | undefined>();
//   const file = files[fileName];
//   const [editorMode, setEditorMode] = useState("web");
//   const [languageId, setLanguageId] = useState(10);
//   const [compileInput, setCompileInput] = useState("");
//   const [compileOutput, setCompileOutput] = useState("");
//   const [source, setSource] = useState(file.value);

//   const [sourceCodeObject, setSourceCodeObject] = useState<SourceCodeObject>({
//     css: files["style.css"].value,
//     html: files["index.html"].value,
//     js: files["script.js"].value,
//   });
//   useEffect(() => {
//     return () => {
//       if (disposeEmmetHTMLRef.current) {
//         disposeEmmetHTMLRef.current();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const loadedFiles = loadFilesFromLocalStorage();
//     setFiles(loadedFiles);
//   }, []);

//   useEffect(() => {
//     // Import the Monaco Editor and other browser-specific dependencies here
//     import("monaco-editor/esm/vs/basic-languages/html/html.contribution");
//     import(
//       "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution"
//     );
//     import("monaco-editor/esm/vs/basic-languages/css/css.contribution");
//     import("monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution");
//     import("monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution");
//     import("monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution");
//     import("monaco-editor/esm/vs/basic-languages/elixir/elixir.contribution");
//     import("monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution");
//     import("monaco-editor/esm/vs/basic-languages/go/go.contribution");
//     import("monaco-editor/esm/vs/basic-languages/java/java.contribution");
//     import("monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution");
//     import("monaco-editor/esm/vs/basic-languages/lua/lua.contribution");
//     import(
//       "monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution"
//     );
//     import("monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution");
//     import("monaco-editor/esm/vs/basic-languages/perl/perl.contribution");
//     import("monaco-editor/esm/vs/basic-languages/php/php.contribution");
//     import("monaco-editor/esm/vs/basic-languages/python/python.contribution");
//     import("monaco-editor/esm/vs/basic-languages/r/r.contribution");
//     import("monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution");
//     import("monaco-editor/esm/vs/basic-languages/rust/rust.contribution");
//     import("monaco-editor/esm/vs/basic-languages/scala/scala.contribution");
//     import("monaco-editor/esm/vs/basic-languages/sql/sql.contribution");
//     import("monaco-editor/esm/vs/basic-languages/swift/swift.contribution");
//     import(
//       "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution"
//     );
//   }, []);

//   useEffect(() => {
//     if (mode == "preview") {
//       updatePreview();
//     }
//     updateChatInfo();
//   }, [files, mode, editorMode, compileOutput, compileInput, languageId]);

//   useEffect(() => {}, []);
//   const handleEditorWillMount = (monaco) => {
//     disposeEmmetHTMLRef.current = emmetHTML(monaco);
//   };

//   const handleFileChange = (fileName) => {
//     setFileName(fileName);
//     setSource(files[fileName].value);
//   };

//   const updatePreview = () => {
//     const iframe = document.createElement("iframe");
//     const preview = document.getElementById("preview");
//     let iframeContent;

//     if (editorMode == "web") {
//       const javascript = files["script.js"];
//       const css = files["style.css"];
//       const html = files["index.html"];
//       iframeContent = reactIframeBoiler(css, html, javascript);
//     }
//     if (editorMode == "code") {
//       iframeContent = codeOutputBoiler(compileOutput);
//     }

//     iframe.srcdoc = iframeContent;
//     iframe.style.width = "100%";
//     iframe.style.height = "100%";
//     iframe.style.border = "none";
//     preview.innerHTML = "";
//     preview.appendChild(iframe);
//   };

//   const handleCodeChange = (value) => {
//     if (editorMode == "web") {
//       const updatedFile = { ...file, value };
//       const updatedFiles = { ...files, [fileName]: updatedFile };

//       if (codeChangedTimeout) {
//         clearTimeout(codeChangedTimeout);
//       }

//       const newTimeout = setTimeout(() => {
//         setFiles(updatedFiles);
//         saveFilesToLocalStorage(updatedFiles);
//       }, 1000);

//       setCodeChangedTimeout(newTimeout);
//     }

//     if (editorMode == "code") {
//       setCompileInput(value);
//     }
//   };
//   const updateChatInfo = () => {
//     if (editorMode == "code") {
//       const language = languages.find((lang) => lang["id"] === languageId).name;
//       setSourceCodeObject({
//         source: compileInput,
//         output: compileOutput,
//         language,
//       });
//     }
//     if (editorMode == "web") {
//       setSourceCodeObject({
//         css: files["style.css"].value,
//         html: files["index.html"].value,
//         js: files["script.js"].value,
//       });
//     }
//   };
//   const handleRunClick = async () => {
//     console.log(editorMode)
//     if (editorMode == "code") {
//       try {
//         const additionalFiles = languageId == 82;
//         const result = await compile(compileInput, languageId, additionalFiles);
//         setCompileOutput(result);
//       } catch (e) {
//         setCompileOutput(e.message);
//       }
//     } else {
//       updatePreview();
//     }
//   };

//   const handleSwitchToPreview = () => {
//     setMode("preview");
//   };

//   const handleSwitchToChat = () => {
//     setMode("chat");
//   };

//   const handleSwitchToLab = () => {
//     setMode("quiz");
//   };

//   return (
//     <>
//       <PreviewNav
//         handleSwitchToChat={handleSwitchToChat}
//         handleSwitchToLab={handleSwitchToLab}
//         handleSwitchToPreview={handleSwitchToPreview}
//         mode={mode}
//       />
//       <FileManager
//         handleFileChange={handleFileChange}
//         handleRunClick={handleRunClick}
//         fileName={fileName}
//         displayFiles={displayFileManager}
//       />
//       <div style={{ display: "flex" }}>
//         <WebEditor
//           height='80vh'
//           theme='vs-dark'
//           path={file.name}
//           defaultLanguage={file.language}
//           defaultValue={file.value}
//           onChange={handleCodeChange}
//           beforeMount={handleEditorWillMount}
//           setDisplayFileManager={setDisplayFileManager}
//           setEditorMode={setEditorMode}
//           setLanguageId={setLanguageId}
//           setSource={setSource}
//           source={source}
//           updateChatInfo={updateChatInfo}
//         />
//         {mode == "preview" && <Preview />}

//         {mode == "chat" && <AskChat sourceCodeObject={sourceCodeObject} />}

//         {mode == "quiz" && <Lab sourceCodeObject={sourceCodeObject} />}
//       </div>
//     </>
//   );
// }
// export default WebPlayground;
