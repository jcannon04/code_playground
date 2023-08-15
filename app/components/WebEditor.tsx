import React, { useEffect, useState } from "react";
import ControlledEditor from "@monaco-editor/react";
import languages from "../data/languages.json";
import LanguageSelect from "./LanguageSelect";

const editorOptions = {
  fontSize: 16,
};

const WebEditor = ({
  height,
  theme,
  path,
  defaultLanguage,
  defaultValue,
  onChange,
  beforeMount,
  setDisplayFileManager,
  setEditorMode,
  setLanguageId,
  setSource,
  source,
  updateChatInfo
}) => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [mode, setMode] = useState("web");
  
  // const selectHandler = (newLanguage) => {
  //   const newLanguageId = parseInt(newLanguage.slice(newLanguage.length-2));
  //   newLanguage = newLanguage.slice(0, newLanguage.length-3)
  //   console.log(newLanguage)
  //   if (newLanguage == "web") {
  //     setMode("web");
  //     setSource(defaultValue)
  //     setDisplayFileManager(true);
  //     setLanguage(defaultLanguage);
  //     setEditorMode("web");
  //     setLanguageId(newLanguageId)

  //   } else {
  //     setMode("code");  
  //     setDisplayFileManager(false);
  //     setLanguage(newLanguage);
  //     setEditorMode("code");
  //     setLanguageId(newLanguageId)
  //   }
  // };

  useEffect(() => {
    if (mode == "web") {
      setLanguage(defaultLanguage);
    } else {
      setSource(language)
    }
  }, [defaultLanguage, language]);

  return (
    <div style={{ flex: 2 }}>
      <ControlledEditor
        height={height}
        theme={theme}
        path={path}
        language={language}
        value={source}
        onChange={onChange}
        options={editorOptions}
        beforeMount={beforeMount}
      />
      {/* <LanguageSelect languages={languages} selectHandler={selectHandler} /> */}
    </div>
  );
};

export default WebEditor;
