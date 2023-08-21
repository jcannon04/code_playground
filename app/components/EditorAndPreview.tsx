import React from "react";
import WebEditor from "./WebEditor";
import Lab from "./Lab";
import Preview from "./Preview";
import AskChat from "./AskChat";
import languages from "../data/languages.json";

const EditorAndPreview = ({
  height,
  theme,
  path,
  defaultLanguage,
  handleCodeChange,
  source,
  mode,
  currentFile,
  languageId,
  handleEditorWillMount,
  sourceCodeObject,
  id,
  projectLab,
  setProjectLab,
}) => {
  return (
    <div style={{ display: "flex" }}>
      <WebEditor
        height={height}  // Use the provided props
        theme={theme}
        path={currentFile?.fileName}
        defaultLanguage={
          languages.find((lang) => languageId === lang.id)?.editor
        }
        onChange={handleCodeChange}
        beforeMount={handleEditorWillMount}
        source={currentFile.sourceCode}
      />
      {mode === "preview" && <Preview />}

      {mode === "chat" && <AskChat sourceCodeObject={sourceCodeObject} />}

      {mode === "quiz" && (
        <Lab
          sourceCodeObject={sourceCodeObject}
          projectId={id}
          projectLab={projectLab}
          setProjectLab={setProjectLab}
        />
      )}
    </div>
  );
};

export default EditorAndPreview;
 