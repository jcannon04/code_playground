import React, { useEffect, useState } from "react";
import ControlledEditor from "@monaco-editor/react";


const editorOptions = {
  fontSize: 16,
};

const WebEditor = ({
  height,
  theme,
  path,
  defaultLanguage,
  onChange,
  beforeMount,
  source,
}) => {
  return (
    <div style={{ flex: 2 }}>
      <ControlledEditor
        height={height}
        theme={theme}
        path={path}
        language={defaultLanguage}
        value={source}
        onChange={onChange}
        options={editorOptions}
        beforeMount={beforeMount}
      />
    </div>
  );
};

export default WebEditor;
