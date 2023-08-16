"use client";
import { useState, useEffect, useRef } from "react";
import PreviewNav from "@/app/components/previewNav";
import FileManager from "@/app/components/FileManager";
import WebEditor from "@/app/components/WebEditor";
import Preview from "@/app/components/Preview";
import AskChat from "@/app/components/AskChat";
import Lab from "@/app/components/Lab";
import Files from "@/app/types/projectFiles";
import File from "@/app/types/projectFile";
import { compile } from "@/app/compiler/judge";
import codeOutputBoiler from "@/app/iframes/codeOutputboiler";
import reactIframeBoiler from "@/app/iframes/reactBoilerPlate";
import languages from "../../data/languages.json";
import { emmetHTML } from "emmet-monaco-es";
import { SourceCodeObject } from "@/app/types/sourceCodeObject";
// const saveFilesToLocalStorage = (files) => {
//     localStorage.setItem("webPlaygroundFiles", JSON.stringify(files));
//   };

//   const loadFilesFromLocalStorage = () => {
//     const storedFiles = localStorage.getItem("webPlaygroundFiles");
//     return storedFiles ? JSON.parse(storedFiles) : starterFiles;
//   };
const ProjectPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [languageId, setLanguageId] = useState(10);
  // const [project, setProject] = useState();
  const [mode, setMode] = useState("preview");
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState<File>(null);
  const [source, setSource] = useState("");
  const [output, setOutput] = useState("");
  const [codeChangedTimeout, setCodeChangedTimeout] = useState(null);
  const disposeEmmetHTMLRef = useRef<() => void | undefined>();
  const [project, setProject] = useState();
  const [sourceCodeObject, setSourceCodeObject] =
    useState<SourceCodeObject>(null);
  const [projectLab, setProjectLab] = useState("");
  const isWebMode = (langId: number) => langId === 10;
  const additionalFiles = (langId: number) => langId == 82;

  useEffect(() => {
    setUpProject();
  }, []);

  useEffect(() => {}, []);
  const handleEditorWillMount = (monaco) => {
    disposeEmmetHTMLRef.current = emmetHTML(monaco);
  };

  useEffect(() => {
    if (mode == "preview" && project) {
      updatePreview();
    }
    updateChatInfo();
  }, [files, mode, output, languageId, project]);

  useEffect(() => {
    // Import the Monaco Editor and other browser-specific dependencies here
    import("monaco-editor/esm/vs/basic-languages/html/html.contribution");
    import(
      "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution"
    );
    import("monaco-editor/esm/vs/basic-languages/css/css.contribution");
    import("monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution");
    import("monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution");
    import("monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution");
    import("monaco-editor/esm/vs/basic-languages/elixir/elixir.contribution");
    import("monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution");
    import("monaco-editor/esm/vs/basic-languages/go/go.contribution");
    import("monaco-editor/esm/vs/basic-languages/java/java.contribution");
    import("monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution");
    import("monaco-editor/esm/vs/basic-languages/lua/lua.contribution");
    import(
      "monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution"
    );
    import("monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution");
    import("monaco-editor/esm/vs/basic-languages/perl/perl.contribution");
    import("monaco-editor/esm/vs/basic-languages/php/php.contribution");
    import("monaco-editor/esm/vs/basic-languages/python/python.contribution");
    import("monaco-editor/esm/vs/basic-languages/r/r.contribution");
    import("monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution");
    import("monaco-editor/esm/vs/basic-languages/rust/rust.contribution");
    import("monaco-editor/esm/vs/basic-languages/scala/scala.contribution");
    import("monaco-editor/esm/vs/basic-languages/sql/sql.contribution");
    import("monaco-editor/esm/vs/basic-languages/swift/swift.contribution");
    import(
      "monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution"
    );
  }, []);

  const updatePreview = () => {
    const iframe = document.createElement("iframe");
    const preview = document.getElementById("preview");
    let iframeContent;

    if (isWebMode(languageId)) {
      const javascript = files.find(
        (file) => file.fileName === "script.js"
      )?.sourceCode;
      const css = files.find(
        (file) => file.fileName === "style.css"
      )?.sourceCode;
      const html = files.find(
        (file) => file.fileName === "index.html"
      )?.sourceCode;
      iframeContent = reactIframeBoiler(css, html, javascript);
    } else {
      iframeContent = codeOutputBoiler(output);
    }

    iframe.srcdoc = iframeContent;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    preview.innerHTML = "";
    preview.appendChild(iframe);
  };

  const setUpProject = async () => {
    try {
      const response = await fetch(`/api/project/${id}`);
      const newProject = await response.json();
      setProject(newProject);
      setProjectLab(newProject.lab);
      setLanguageId(newProject.languageId);
      setFiles(newProject.files);
      setCurrentFile(newProject.files[0]);
      setSource(newProject.files[0].sourceCode);
      if (isWebMode(newProject.languageId)) {
        setSourceCodeObject({
          css: newProject.files.find(
            (file: File) => file.fileName === "style.css"
          ),
          js: newProject.files.find(
            (file: File) => file.fileName === "script.js"
          ),
          html: newProject.files.find(
            (file: File) => file.fileName === "index.html"
          ),
        });
      } else {
        setSourceCodeObject({
          source: newProject.files[0].sourceCode,
          output: output,
          language: languages.find((lang) => lang.id === newProject.languageId)
            .name,
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleFileChange = (newFileName: string) => {
    let newCurrentFile = files.find((file) => file.fileName === newFileName);
    setCurrentFile(newCurrentFile);
    setSource(newCurrentFile.sourceCode);
  };
  const handleCodeChange = (value: string) => {
    if (isWebMode(languageId)) {
      const updatedFile = { ...currentFile, sourceCode: value };
      const updatedFiles = files.map((file) =>
        file.fileName === currentFile.fileName ? updatedFile : file
      );
      if (codeChangedTimeout) {
        clearTimeout(codeChangedTimeout);
      }

      const newTimeout = setTimeout(() => {
        setFiles(updatedFiles);
      }, 1000);

      setCodeChangedTimeout(newTimeout);
    } else {
      setSource(value);
    }
  };
  const handleRunClick = async () => {
    if (!isWebMode(languageId)) {
      try {
        const result = await compile(
          source,
          languageId,
          additionalFiles(languageId)
          );
        setOutput(result);
      } catch (e) {
        setOutput(e.message);
      }
    } else {
      updatePreview();
    }
  };

  const updateChatInfo = () => {
    if (isWebMode(languageId)) {
      setSourceCodeObject({
        css: files.find((file) => file.fileName === "style.css")?.sourceCode,
        js: files.find((file: File) => file.fileName === "script.js")
          ?.sourceCode,
        html: files.find((file: File) => file.fileName === "index.html")
          ?.sourceCode,
      });
    } else {
      setSourceCodeObject({
        source,
        output: output,
        language: languages.find((lang) => lang.id === languageId).name,
      });
    }
  };
  const handleSwitchToPreview = () => {
    setMode("preview");
  };

  const handleSwitchToChat = () => {
    setMode("chat");
  };

  const handleSwitchToLab = () => {
    setMode("quiz");
  };
  return (
    <>
      <PreviewNav
        handleSwitchToChat={handleSwitchToChat}
        handleSwitchToLab={handleSwitchToLab}
        handleSwitchToPreview={handleSwitchToPreview}
        mode={mode}
      />
      <FileManager
        handleFileChange={handleFileChange}
        handleRunClick={handleRunClick}
        fileName={currentFile?.fileName}
        displayFiles={isWebMode(languageId)}
      />
      {project && (
        <div style={{ display: "flex" }}>
          <WebEditor
            height='80vh'
            theme='vs-dark'
            path={currentFile?.fileName}
            defaultLanguage={
              languages.find((lang) => languageId === lang.id)?.editor
            }
            onChange={handleCodeChange}
            beforeMount={handleEditorWillMount}
            source={source}
            //   updateChatInfo={updateChatInfo}
          />
          {mode == "preview" && <Preview />}

          {mode == "chat" && <AskChat sourceCodeObject={sourceCodeObject} />}

          {mode == "quiz" && (
            <Lab
              sourceCodeObject={sourceCodeObject}
              projectId={id}
              projectLab={projectLab}
              setProjectLab={ setProjectLab }
              
            />
          )}
        </div>
      )}
    </>
  );
};

export default ProjectPage;
